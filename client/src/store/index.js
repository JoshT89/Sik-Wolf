import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: 'purple',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './satan.png',
    fullDecal: './Unicorn guts.png',
});

export default state;