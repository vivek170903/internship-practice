const anime = {
  animeName: "One Iece",
  famousarc: "Impel Down",
  FamousCharacter: "Zoro",
};

let { animeName, famousarc, ...restProps } = anime;
console.log(animeName);
console.log(restProps);