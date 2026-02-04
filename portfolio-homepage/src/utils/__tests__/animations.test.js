import { 
  getAnimationSpeed, 
  prefersReducedMotion, 
  calculateMagneticOffset,
  lerp,
  easing,
  throttle,
  debounce,
  random,
  isInViewport
} from '../animations';

describe('Animation Utilities', () => {
  describe('getAnimationSpeed', () => {
    test('returns correct speed multipliers', () => {
      expect(getAnimationSpeed('slow')).toBe(1.5);
      expect(getAnimationSpeed('normal')).toBe(1);
      expect(getAnimationSpeed('fast')).toBe(0.7);
      expect(getAnimationSpeed('invalid')).toBe(1);
    });
  });

  describe('prefersReducedMotion', () => {
    test('returns false when matchMedia is mocked', () => {
      expect(prefersReducedMotion()).toBe(false);
    });
  });

  describe('calculateMagneticOffset', () => {
    test('calculates magnetic offset correctly', () => {
      const mouseX = 100;
      const mouseY = 100;
      const elementRect = { left: 50, top: 50, width: 100, height: 100 };
      const strength = 0.5;

      const result = calculateMagneticOffset(mouseX, mouseY, elementRect, strength);
      
      expect(result).toHaveProperty('x');
      expect(result).toHaveProperty('y');
      expect(typeof result.x).toBe('number');
      expect(typeof result.y).toBe('number');
    });

    test('returns zero offset when distance is too large', () => {
      const mouseX = 1000;
      const mouseY = 1000;
      const elementRect = { left: 0, top: 0, width: 100, height: 100 };

      const result = calculateMagneticOffset(mouseX, mouseY, elementRect);
      
      expect(result.x).toBe(0);
      expect(result.y).toBe(0);
    });
  });

  describe('lerp', () => {
    test('interpolates between values correctly', () => {
      expect(lerp(0, 10, 0.5)).toBe(5);
      expect(lerp(0, 10, 0)).toBe(0);
      expect(lerp(0, 10, 1)).toBe(10);
    });
  });

  describe('easing functions', () => {
    test('easeInOut returns correct values', () => {
      expect(easing.easeInOut(0)).toBe(0);
      expect(easing.easeInOut(1)).toBe(1);
      expect(easing.easeInOut(0.5)).toBe(0.5);
    });

    test('easeOut returns correct values', () => {
      expect(easing.easeOut(0)).toBe(0);
      expect(easing.easeOut(1)).toBe(1);
    });
  });

  describe('throttle', () => {
    jest.useFakeTimers();

    test('throttles function calls', () => {
      const mockFn = jest.fn();
      const throttledFn = throttle(mockFn, 100);

      throttledFn();
      throttledFn();
      throttledFn();

      expect(mockFn).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(100);
      throttledFn();

      expect(mockFn).toHaveBeenCalledTimes(2);
    });
  });

  describe('debounce', () => {
    jest.useFakeTimers();

    test('debounces function calls', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);

      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('random', () => {
    test('generates numbers within range', () => {
      const result = random(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    });
  });

  describe('isInViewport', () => {
    test('returns boolean for element visibility', () => {
      const mockElement = {
        getBoundingClientRect: () => ({
          top: 0,
          left: 0,
          bottom: 100,
          right: 100
        })
      };

      // Mock window dimensions
      Object.defineProperty(window, 'innerHeight', { value: 800 });
      Object.defineProperty(window, 'innerWidth', { value: 1200 });

      const result = isInViewport(mockElement);
      expect(typeof result).toBe('boolean');
    });
  });
});