import { ImageModel } from "../../image/models/image.model"

export interface AlbumModel{
    id: string
    name: string
    firstImage: ImageModel
}