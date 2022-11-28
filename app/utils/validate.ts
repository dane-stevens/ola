import { z, ZodRawShape, ZodType } from "zod";

export const parseFormData = async (
  request: Request | FormData,
  schema: ZodRawShape
) => {
  const formData =
    request instanceof FormData ? request : await request.formData();
  const finalSchema = schema instanceof ZodType ? schema : z.object(schema);

  const parsedData: ZodRawShape = {};
  Object.keys(schema)?.map((key: string) => {
    // console.log("KEY------", schema[key]);
    const zodType:
      | "ZodString"
      | "ZodLiteral"
      | "ZodEnum"
      | "ZodNumber"
      | "ZodDate"
      | "ZodBoolean"
      | "ZodOptional"
      | "ZodArray" = schema[key]._def.typeName;

    const value: FormDataEntryValue | null = formData.get(key);

    if (zodType === "ZodOptional") {
      const subZodType = schema[key]._def.innerType._def.typeName;
      return (parsedData[key] = parsers[subZodType](value));
    }

    if (zodType === "ZodArray") {
      const values = formData.getAll(key);
      const subZodType = schema[key]._def.type._def.typeName;
      //   console.log({ subZodType });
      parsedData[key] = [];
      return values?.map((value: FormDataEntryValue) => {
        return parsedData[key].push(parsers[subZodType](value));
      });
    }

    if (parsers[zodType]) {
      return (parsedData[key] = parsers[zodType](value));
    }

    return (parsedData[key] = value);
  });

  return finalSchema.parse(parsedData);
};

const parsers = {
  ZodString: (val: string) => (val ? val : undefined),
  ZodEnum: (val: string) => (val ? val : undefined),
  ZodLiteral: (val: string) => (val ? val : undefined),
  ZodNumber: (val: string) => (val ? Number(val) : undefined),
  ZodDate: (val: string) => (val ? new Date(val) : undefined),
  ZodBoolean: (val: string) =>
    ["on", "true", "1"].includes((val || "").toLowerCase()),
};
