import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: 'purple',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './sikwolf.png',
    fullDecal: './sikwolf2.png',
});

export default state;