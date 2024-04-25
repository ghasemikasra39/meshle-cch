import {Struct, sui8, ui8} from '@meshle/meshle-typebase';

export const IncrementStruct = Struct.define([
  ['reserved0', sui8],
  ['value', ui8],
  ['reserved1', sui8],
] as const);
