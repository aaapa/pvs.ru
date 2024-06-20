import { header } from "../components/header/header.js";
header();

import { useDynamicAdapt } from "./libraries/dynamicAdapt/dynamicAdapt.js";
useDynamicAdapt()

import { news } from "../blocks/news/news.js";
news();

tippy("[data-tippy-content]");