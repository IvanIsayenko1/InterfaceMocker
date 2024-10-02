import Jabber from "jabber";
import { DEFAULT_ARRAY_LENGTH } from "../constants/constants";

const jabber = new Jabber();

export interface ParsedProperty {
  key: string;
  type: string;
  isNested: boolean;
  isArray: boolean;
  arrayLength: number | null;
  id: string;
}

export interface ParsedInterfaces {
  [key: string]: ParsedProperty[];
}

/**
 * Checks if the properties associated with a specific key in the parsed interfaces contain any arrays.
 *
 * @param {ParsedInterfaces} parsedInterfaces - The object containing parsed interfaces to check.
 * @param {string} key - The key in the parsed interfaces to check for array properties.
 * @returns {boolean} True if any properties associated with the key are arrays, false otherwise.
 */
export function hasArrayInKey(
  parsedInterfaces: ParsedInterfaces,
  key: string
): boolean {
  const properties = parsedInterfaces[key];

  if (!properties) {
    return false;
  }

  return properties.some((property) => property.isArray);
}

/**
 * Checks if any properties in the parsed interfaces are of array type.
 *
 * @param {ParsedInterfaces} parsedInterfaces - The object containing parsed interfaces to check.
 * @returns {boolean} True if any properties are arrays, false otherwise.
 */
export function hasArrayProperties(
  parsedInterfaces: ParsedInterfaces
): boolean {
  return Object.values(parsedInterfaces).some((properties) =>
    properties.some((property) => property.isArray)
  );
}

export const parseInterface = (interfaceStr: string): ParsedInterfaces => {
  const interfaces: { [key: string]: ParsedProperty[] } = {};
  const interfaceRegex = /interface (\w+) {([^}]*)}/g;
  let match;

  while ((match = interfaceRegex.exec(interfaceStr)) !== null) {
    const interfaceName = match[1];
    const body = match[2];
    const propertyRegex = /(\w+):\s*([\w\\[\]]+)[;,]?\s*/g;
    const properties: ParsedProperty[] = [];
    let propMatch;

    while ((propMatch = propertyRegex.exec(body)) !== null) {
      const key = propMatch[1];
      let type = propMatch[2];
      const isArray = /\[\]$/.test(type);
      const isNested = isArray
        ? /^(?!Date\b)[A-Z]\w*\[\]$/.test(type)
        : /^(?!Date\b)[A-Z]\w*$/.test(type);

      if (isArray) {
        type = type.slice(0, -2);
      }

      properties.push({
        id: generateUniqueId(),
        key,
        type,
        isNested,
        isArray,
        arrayLength: isArray ? DEFAULT_ARRAY_LENGTH : null,
      });
    }

    interfaces[interfaceName] = properties;
  }

  return interfaces;
};

export function generateJsonFromInterfaces(interfaces: ParsedInterfaces): any {
  const jsonOutput: { [key: string]: any } = {};

  for (const [interfaceName, properties] of Object.entries(interfaces)) {
    jsonOutput[interfaceName] = {};

    properties.forEach((property) => {
      const { key, type, isNested, isArray, arrayLength } = property;
      let value: any;

      // Simulate values based on type
      switch (type) {
        case "string":
          value = generateRandomText(generateRandomNumber(1, 5));
          break;
        case "number":
          value = generateRandomNumber(0, 1000);
          break;
        case "boolean":
          value = generateRandomBoolean();
          break;
        case "Date":
          value = getRandomDate().toISOString();
          break;
        default:
          value = isNested ? generateNestedObject(interfaces, type) : null;
      }

      // Handle arrays
      if (isArray && arrayLength) {
        value = Array.from({ length: arrayLength }, () => {
          if (isNested) {
            return generateNestedObject(interfaces, type);
          } else {
            switch (type) {
              case "string":
                return generateRandomText(generateRandomNumber(1, 5));
              case "number":
                return generateRandomNumber(0, 1000);
              case "boolean":
                return generateRandomBoolean();
              case "Date":
                return getRandomDate().toISOString();
              default:
                return null;
            }
          }
        });
      }

      jsonOutput[interfaceName][key] = value;
    });
  }

  return jsonOutput;
}

function generateNestedObject(interfaces: ParsedInterfaces, type: string): any {
  const nestedObject: { [key: string]: any } = {};

  if (interfaces[type]) {
    interfaces[type].forEach((property) => {
      const { key, type, isNested, isArray, arrayLength } = property;
      let value: any;

      switch (type) {
        case "string":
          value = generateRandomText(generateRandomNumber(1, 5));
          break;
        case "number":
          value = generateRandomNumber(0, 1000);
          break;
        case "boolean":
          value = generateRandomBoolean();
          break;
        case "Date":
          value = getRandomDate().toISOString();
          break;
        default:
          value = isNested ? generateNestedObject(interfaces, type) : null;
      }

      if (isArray && arrayLength !== null) {
        value = Array.from({ length: arrayLength }, () => {
          if (isNested) {
            return generateNestedObject(interfaces, type);
          } else {
            switch (type) {
              case "string":
                return generateRandomText(generateRandomNumber(1, 5));
              case "number":
                return generateRandomNumber(0, 1000);
              case "boolean":
                return generateRandomBoolean();
              case "Date":
                return getRandomDate().toISOString();
              default:
                return null;
            }
          }
        });
      }

      nestedObject[key] = value;
    });
  }

  return nestedObject;
}

/**
 * Generate a random date between January 1, 1990 and December 31, 2050
 * @returns {Date}
 */
function getRandomDate(): Date {
  const start = new Date(1990, 0, 1); // January 1, 1990
  const end = new Date(2050, 11, 31); // December 31, 2050
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

/**
 * Generates a random integer between two specified values, inclusive.
 *
 * @param {number} fromt - The lower bound of the range (inclusive).
 * @param {number} to - The upper bound of the range (inclusive).
 * @returns {number} A random integer between `fromt` and `to`.
 */
function generateRandomNumber(fromt: number, to: number): number {
  return Math.floor(Math.random() * (to - fromt + 1)) + fromt;
}

/**
 * Generates a random boolean value (true or false).
 *
 * @returns {boolean} A random boolean value.
 */
function generateRandomBoolean(): boolean {
  return Math.random() < 0.5;
}

/**
 * Generates a random text paragraph of a specified length.
 *
 * @param {number} length - The length of the paragraph to generate.
 * @returns {string} A randomly generated text paragraph.
 */
function generateRandomText(length: number): string {
  return jabber.createParagraph(length);
}

function generateUniqueId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
