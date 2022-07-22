/**
 * Dealing with svgs was very painful. Requirements:
 * - use the svg as a component, not image. this offers more utility and flexibility than <img> tags
 * - load with ssr, not reading the file from static at runtime.
 * Options: rollup bundling (did not work, but anyone else can attempt to try), img tag, or direct
 * This is the result of trying to provide flexibility and utility through the third option. Svelte
 * is pretty good at reading it's own files but not .svg files, so we just pack it into a .svelte
 *
 * Guidelines: Do not make multiple of the same icon if they are used in different directions. Just rotate it.
 *
 * To add a new icon,
 * - copy any one you like. e.g. from https://heroicons.dev/ and paste it into a new <IconName>.svelte in this folder.
 * - export it as a named export in this file.
 * - start using it with the Icon component! It can be passed in as a string or a component.
 */

export * from './brands'
export { default as Adjustments } from './Adjustments.svelte'
export { default as ArrowRight } from './ArrowRight.svelte'
export { default as ArrowUp } from './ArrowUp.svelte'
export { default as Bell } from './Bell.svelte'
export { default as Book } from './Book.svelte'
export { default as Check } from './Check.svelte'
export { default as CheckCircle } from './CheckCircle.svelte'
export { default as ChevronDown } from './ChevronDown.svelte'
export { default as Clipboard } from './Clipboard.svelte'
export { default as Compass } from './Compass.svelte'
export { default as Contract } from './Contract.svelte'
export { default as DotsHorizontal } from './DotsHorizontal.svelte'
export { default as DotsVertical } from './DotsVertical.svelte'
export { default as ExternalLink } from './ExternalLink.svelte'
export { default as GasPump } from './GasPump.svelte'
export { default as Globe } from './Globe.svelte'
export { default as Grid } from './Grid.svelte'
export { default as Info } from './Info.svelte'
export { default as Link } from './Link.svelte'
export { default as Load } from './Load.svelte'
export { default as Lock } from './Lock.svelte'
export { default as Menu } from './Menu.svelte'
export { default as Minus } from './Minus.svelte'
export { default as PaperAirplane } from './PaperAirplane.svelte'
export { default as Pencil } from './Pencil.svelte'
export { default as Plus } from './Plus.svelte'
export { default as Question } from './Question.svelte'
export { default as Search } from './Search.svelte'
export { default as Signature } from './Signature.svelte'
export { default as Star } from './Star.svelte'
export { default as StarOutlined } from './StarOutlined.svelte'
export { default as Times } from './Times.svelte'
export { default as Trash } from './Trash.svelte'
