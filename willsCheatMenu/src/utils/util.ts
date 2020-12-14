import { GameItemKey } from "../../../typings/gameData";
import { Item } from "../../../typings/item";
import { Player } from "../../../typings/player";
import { TODO } from "../../../typings/util";
import { Prodigy } from "../../../typings/prodigy";
import { Game } from "../../../typings/game";
const base: { game: Game, prodigy: Prodigy } = _.instance;
export const game = base.game;
export const prodigy = base.prodigy;
export const gameData = game.state.states.Boot._gameData;
export const getItem = <T extends GameItemKey>(type: T, id: number): Item<T> | null =>
	(gameData[type].find(x => x.ID === id) as null | Item<any>) ?? null;
export const VERY_LARGE_NUMBER = 9e9;
export const savePlayer = () => _.player.forceSaveCharacter();
export const assetURL = "https://raw.githubusercontent.com/Prodigy-Hacking/ProdigyMathGameHacking/HEAD/willsCheatMenu/src/assets/";
export const joinAsset = (asset: string) => `${assetURL}${asset}`;
export const locations = {
	academy: joinAsset("academy.png"),
	bonfire_spire: joinAsset("bonfire_spire.png"),
	forest: joinAsset("forest.png"),
	shipwreck_shore: joinAsset("shipwreck_shore.png"),
	shiverchill: joinAsset("shiverchill.png"),
	skywatch: joinAsset("skywatch.png"),
};
export const pickRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];