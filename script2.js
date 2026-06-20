const user = { profile: { name: "Alice" } };
console.log(user?.profile?.name); // Alice
console.log(user?.settings?.theme); // undefined
console.log(user.profile.name ?? "Guest"); // Alice

const config = { timeout: 0 };
console.log(config.timeout || 5000); // 5000
console.log(config.timeout ?? 5000); // 0

//----

function calculateBonus(baseScore) {
  var tempScore = 0;
  if (baseScore > 50) {
    var multiplier = 2;
    tempScore = baseScore * multiplier;
  } else {
    var multiplier = 1;
    tempScore = baseScore;
  }
  return tempScore;
}

console.log(calculateBonus(80));
console.log(tempScore);
