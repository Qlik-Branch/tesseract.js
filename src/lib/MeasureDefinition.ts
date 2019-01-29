import { GroupingEnum, FieldAttributes, Generatable } from './';

export class MeasureDefinition extends Generatable {
  label: String;
  description: String;
  tags: String[] = [];
  grouping: GroupingEnum;
  def: String;
  numFormat: FieldAttributes;
  relative: Boolean;
  brutalSum: Boolean;
  aggrFunc: String;
  accumulate: Number;
  reverseSort: Boolean;
  activeExpression: Number;
  expressions: String[] = [];

  constructor(definition?: String) {
    super();
    if (definition) {
      this.def = definition;
    }
  }
}
