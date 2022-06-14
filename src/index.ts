export default class<T = any> {
  private _faces: T[]
  constructor(...faces: T[]) {
    this._faces = faces
  }

  get faces() {
    return this._faces
  }

  roll() {
    const rnd = Math.random() * this._faces.length
    const index = Math.floor(rnd)
    return this._faces[index]
  }
}
