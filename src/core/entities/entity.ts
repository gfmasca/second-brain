import { UniqueEntityId } from "./unique-entity-id.ts";

export abstract class Entity<Props> {
  private _id: UniqueEntityId;
  protected props: Props;

  get id() {
    return this._id;
  }

  protected constructor(props: Props, id?: UniqueEntityId) {
    this.props = props;

    this._id = id ?? new UniqueEntityId();
  }
  public equals(entity: Entity<undefined>) {
    if (entity === this) {
      return true;
    }

    if (entity.id === this._id) {
      return true;
    }

    return false;
  }
}
