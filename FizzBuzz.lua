local checks = {
  [3] = "Fizz",
  [5] = "Buzz",
  [7] = "Fuzz",
  [9] = "Bizz",
  [11] = "Biff",
  [13] = "Bifz"
}

for count = 1, 100 do
  local finalString = ""

  for num, str in pairs(checks) do
    if count % num == 0 then
      finalString = finalString .. str
    end
  end

  if finalString == "" then
    finalString = tostring(count)
  end

  print(finalString)
end
