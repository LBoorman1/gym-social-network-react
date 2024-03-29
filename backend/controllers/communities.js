import Community from "../models/community.js";
import CommunityUser from "../models/communityUser.js";

export const createCommunity = async (req, res) => {
  const communityName = req.body.communityName;
  const creatorId = req.id;
  const description = req.body.description;

  const newCommunity = new Community({
    communityName: communityName,
    creator: creatorId,
    description: description,
  });

  try {
    const invalidCommunity = await Community.findOne({
      creator: creatorId,
      communityName: communityName,
    });

    if (invalidCommunity) {
      return res
        .status(409)
        .send({ message: "Community already exists with given name!" });
    }
    await newCommunity.save();

    const newCommunityUser = new CommunityUser({
      community: newCommunity._id,
      user: creatorId,
    });

    await newCommunityUser.save();

    res.status(201).json(newCommunity);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const joinCommunity = async (req, res) => {
  const community = req.body.communityId;
  const user = req.id;

  const check = await CommunityUser.findOne({
    community: community,
    user: user,
  });
  if (check) {
    return res
      .status(409)
      .send({ message: "User is already a member of this community!" });
  }
  const newCommunityUser = new CommunityUser({
    community: community,
    user: user,
  });

  try {
    await newCommunityUser.save();
    res.status(201).json({ message: "Successfully joined the community!" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const searchCommunity = async (req, res) => {
  try {
    const communityName = req.query.searchTerm;
    const agg = [
      {
        $search: {
          autocomplete: {
            query: `${communityName}`,
            path: "communityName",
          },
        },
      },
      {
        $limit: 5,
      },
      {
        $project: {
          _id: 1,
          communityName: 1,
          description: 1, //come back to this to get creator name
        },
      },
    ];

    const response = await Community.aggregate(agg);
    return res.json(response);
  } catch (error) {
    console.log(error);
    return res.json(["Error"]);
  }
};

export const retrieveCommunities = async (req, res) => {
  const user = req.id;

  const communityUsers = await CommunityUser.find(
    { user: user },
    { _id: 0, community: 1 }
  )
    .populate("community")
    .select("community");

  const communities = [];
  for await (const doc of communityUsers) {
    const community = await Community.findOne({ _id: doc.community._id });
    communities.push(community);
  }

  return res.json(communities);
};
