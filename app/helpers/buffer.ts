import {Pointer, Struct, StructType} from '@meshle/meshle-typebase';

export const packBuffer = <S extends Struct<any>>(
  struct: S,
  value: StructType<S>,
): Buffer => {
  const pointer = new Pointer(Buffer.allocUnsafe(struct.size));
  struct.pack(pointer, value);
  return pointer.buf;
};

export const unpackBuffer = <S extends Struct<any>>(
  struct: S,
  value: string,
): StructType<S> => {
  const pointer = new Pointer(Buffer.from(value, 'base64'));
  return <StructType<S>>struct.unpack(pointer);
};
