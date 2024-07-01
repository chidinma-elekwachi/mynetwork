import React from "react";

export interface feedIdentity {
  imageUrl: string;
  name: string;
  pronouns: string;
  role: string;
  description: string;
  profileViewers: number;
  postImpressions: number;
  savedItems: number;
}

function FeedIdentity({
  imageUrl,
  name,
  pronouns,
  role,
  description,
  profileViewers,
  postImpressions,
  savedItems,
}: feedIdentity) {
  return (
    <div className="bg-white rounded-lg py-6 shadow-md mb-4">
      <div className="my-4 px-6">
        <div className="flex flex-col text-center">
          <div>
            <img
              className="h-10 w-10 rounded-full my-4 relative left-16"
              src={imageUrl}
              alt={name}
            />
            <h2 className="text-base font-semibold">{name}</h2>
            <p className="text-xs text-gray-500">
              {role} • {description}
            </p>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div className="border-y px-6 py-2">
        <p className="mt-2 text-sm font-semibold text-gray-500">
          Profile viewers{" "}
          <span className="text-customGreen px-2">{profileViewers}</span>
        </p>
        <p className="mt-2 text-gray-500 font-semibold text-sm">
          Post impressions{" "}
          <span className="text-customGreen px-2">{postImpressions}</span>
        </p>
      </div>
      {/* <hr className=" " /> */}
      <div className="mt-4 text-gray-700 px-6">
        Saved Items{" "}
        <span className="text-customGreen px-2">{savedItems}</span>
      </div>
    </div>
  );
}

export default FeedIdentity;
