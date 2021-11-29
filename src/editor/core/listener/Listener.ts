import {
  IIntersectionPageNoChange,
  IPageScaleChange,
  IPageSizeChange,
  IRangeStyleChange,
  IVisiblePageNoListChange
} from "../../interface/Listener"

export class Listener {

  public rangeStyleChange: IRangeStyleChange | null
  public visiblePageNoListChange: IVisiblePageNoListChange | null
  public intersectionPageNoChange: IIntersectionPageNoChange | null
  public pageSizeChange: IPageSizeChange | null
  public pageScaleChange: IPageScaleChange | null

  constructor() {
    this.rangeStyleChange = null
    this.visiblePageNoListChange = null
    this.intersectionPageNoChange = null
    this.pageSizeChange = null
    this.pageScaleChange = null
  }

}