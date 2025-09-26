import { describe, it, expect } from 'vitest';

// Utility functions for JSON operations
const validateJson = (jsonString: string): { isValid: boolean; error?: string } => {
  if (!jsonString.trim()) return { isValid: true };

  try {
    JSON.parse(jsonString);
    return { isValid: true };
  } catch (error) {
    return {
      isValid: false,
      error: error instanceof Error ? error.message : 'Invalid JSON',
    };
  }
};

const formatJson = (jsonString: string, spaces: number = 2): string => {
  try {
    const parsed = JSON.parse(jsonString);
    return JSON.stringify(parsed, null, spaces);
  } catch {
    throw new Error('Invalid JSON');
  }
};

const minifyJson = (jsonString: string): string => {
  try {
    const parsed = JSON.parse(jsonString);
    return JSON.stringify(parsed);
  } catch {
    throw new Error('Invalid JSON');
  }
};

describe('JSON Utility Functions', () => {
  const validJson = '{"name":"test","age":25}';
  const invalidJson = '{"name":"test","age":25';
  const formattedJson = `{
  "name": "test",
  "age": 25
}`;

  describe('validateJson', () => {
    it('should return valid for correct JSON', () => {
      const result = validateJson(validJson);
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should return invalid for incorrect JSON', () => {
      const result = validateJson(invalidJson);
      expect(result.isValid).toBe(false);
      expect(result.error).toBeDefined();
    });

    it('should return valid for empty string', () => {
      const result = validateJson('');
      expect(result.isValid).toBe(true);
    });

    it('should return valid for whitespace-only string', () => {
      const result = validateJson('   ');
      expect(result.isValid).toBe(true);
    });

    it('should handle arrays correctly', () => {
      const arrayJson = '[1, 2, 3]';
      const result = validateJson(arrayJson);
      expect(result.isValid).toBe(true);
    });

    it('should handle nested objects correctly', () => {
      const nestedJson = '{"user":{"name":"test","details":{"age":25}}}';
      const result = validateJson(nestedJson);
      expect(result.isValid).toBe(true);
    });
  });

  describe('formatJson', () => {
    it('should format JSON with default 2 spaces', () => {
      const result = formatJson(validJson);
      expect(result).toContain('  "name"');
      expect(result).toContain('\n');
    });

    it('should format JSON with custom spacing', () => {
      const result = formatJson(validJson, 4);
      expect(result).toContain('    "name"');
    });

    it('should throw error for invalid JSON', () => {
      expect(() => formatJson(invalidJson)).toThrow('Invalid JSON');
    });

    it('should handle arrays correctly', () => {
      const arrayJson = '[1,2,3]';
      const result = formatJson(arrayJson);
      expect(result).toContain('[\n');
      expect(result).toContain('  1,\n');
    });

    it('should handle boolean values correctly', () => {
      const boolJson = '{"active":true,"verified":false}';
      const result = formatJson(boolJson);
      expect(result).toContain('"active": true');
      expect(result).toContain('"verified": false');
    });

    it('should handle null values correctly', () => {
      const nullJson = '{"value":null}';
      const result = formatJson(nullJson);
      expect(result).toContain('"value": null');
    });
  });

  describe('minifyJson', () => {
    it('should remove all whitespace from formatted JSON', () => {
      const result = minifyJson(formattedJson);
      expect(result).not.toContain('\n');
      expect(result).not.toContain('  ');
      expect(result).toBe('{"name":"test","age":25}');
    });

    it('should handle already minified JSON', () => {
      const result = minifyJson(validJson);
      expect(result).toBe(validJson);
    });

    it('should throw error for invalid JSON', () => {
      expect(() => minifyJson(invalidJson)).toThrow('Invalid JSON');
    });

    it('should handle arrays correctly', () => {
      const arrayJson = '[\n  1,\n  2,\n  3\n]';
      const result = minifyJson(arrayJson);
      expect(result).toBe('[1,2,3]');
    });

    it('should preserve string content', () => {
      const stringJson = '{"message":"Hello\\nWorld","text":"  spaced  "}';
      const result = minifyJson(stringJson);
      expect(result).toContain('Hello\\nWorld');
      expect(result).toContain('  spaced  ');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty objects', () => {
      const emptyObj = '{}';
      expect(validateJson(emptyObj).isValid).toBe(true);
      expect(formatJson(emptyObj)).toBe('{}');
      expect(minifyJson(emptyObj)).toBe('{}');
    });

    it('should handle empty arrays', () => {
      const emptyArray = '[]';
      expect(validateJson(emptyArray).isValid).toBe(true);
      expect(formatJson(emptyArray)).toBe('[]');
      expect(minifyJson(emptyArray)).toBe('[]');
    });

    it('should handle numbers correctly', () => {
      const numberJson = '{"int":42,"float":3.14,"negative":-5}';
      const result = validateJson(numberJson);
      expect(result.isValid).toBe(true);

      const formatted = formatJson(numberJson);
      expect(formatted).toContain('"int": 42');
      expect(formatted).toContain('"float": 3.14');
      expect(formatted).toContain('"negative": -5');
    });

    it('should handle special characters in strings', () => {
      const specialJson = '{"special":"àáâãäå","emoji":"🚀","quote":"\\"quoted\\""}';
      const result = validateJson(specialJson);
      expect(result.isValid).toBe(true);
    });

    it('should handle deeply nested structures', () => {
      const deepJson = '{"a":{"b":{"c":{"d":{"e":"deep"}}}}}';
      const result = validateJson(deepJson);
      expect(result.isValid).toBe(true);

      const formatted = formatJson(deepJson);
      expect(formatted.split('\n').length).toBeGreaterThan(5);
    });
  });
});
