import { ResourceWithOptions } from "adminjs";
import { Category, Episode } from "../../models";
import { categoryResourceOptions } from "./category";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
    features: episodeResourceFeatures
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures
  },
]