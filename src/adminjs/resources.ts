import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode, User } from "../models";
import { categoryResourceOptions } from "../adminjs/resources/category";
import { courseResourceOptions } from "../adminjs/resources/course";
import { episodeResourceOptions } from "./resources/episode";
import { userResourceOptions } from "./resources/user";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Course,
    options: courseResourceOptions
  },
  {
    resource: Episode,
    options: episodeResourceOptions
  },
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: User,
    options: userResourceOptions
  }
]