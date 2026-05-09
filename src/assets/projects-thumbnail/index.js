const images = import.meta.glob("./*.{png,jpg,jpeg,svg}", { eager: true });

export const projectsThumbnail = Object.fromEntries(
  Object.entries(images).map(([path, module]) => {
    const key = path.replace("./", "").split(".")[0];
    return [key, module.default];
  }),
);
