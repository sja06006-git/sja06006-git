class Example {
  method(a: string): string;
  method(a: number): number;
  
  method(a: string | number): string | number {
    if (typeof a === "string") {
      return "문자열: " + a;
    } else {
      return a * 2;
    }
  }
}
