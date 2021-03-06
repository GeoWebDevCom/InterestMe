json.user do
  json.extract!(@user, :id, :username, :description, :profile_picture)
  json.isFollowing @isFollowing
  json.owner @owner
end

json.userContent do
  json.pins @pins
  json.pinSetCount @pin_set_count
  json.boards @boards
  json.followers @followed_by
  json.following @following
end
