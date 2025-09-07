const profile = {
  username: 'Jacob',
  playTime: 300,
};

function coolMan(value) {
  return value + 10;
}

profile.getInfo = function () {
  return `${this.username} has ${this.playTime} active hours!`;
};

profile.changeUsername = function (newName) {
  this.username = newName;
};

profile.updatePlayTime = function (hours) {
  this.playTime = this.playTime + hours;
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
