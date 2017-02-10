if @pin
else
  json.pins @pins
  json.user @user ? @user : nil
end
