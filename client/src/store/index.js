import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './sikwolf.png',
    fullDecal: './sikwolf2.png',
});

export default state;