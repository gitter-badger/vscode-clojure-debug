// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-strip-json-comments/6fd0bb0b697465c16e022557c3796bc1358124ac/index.d.ts
declare module '~strip-json-comments/index' {
function stripJsonComments (input: string, options?: stripJsonComments.Options): string;

module stripJsonComments {
  export interface Options {
    whitespace?: boolean;
  }
}

export = stripJsonComments;
}
declare module 'strip-json-comments/index' {
import alias = require('~strip-json-comments/index');
export = alias;
}
declare module 'strip-json-comments' {
import alias = require('~strip-json-comments/index');
export = alias;
}
