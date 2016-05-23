// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7de6c3dd94feaeb21f20054b9f30d5dabc5efabd/express-unless/express-unless.d.ts
declare module "express-unless" {
    import express = require('express');

    function unless(options:unless.Options): express.RequestHandler;

    namespace unless {
        export interface Options {
            custom?: (req: express.Request) => boolean;
            path?: any; // TODO: union type 'string|string[]' is not supported yet
            ext?: any; // TODO: union type 'string|string[]' is not supported yet
            method?: any; // TODO: union type 'string|string[]' is not supported yet
        }
        export interface RequestHandler extends express.RequestHandler {
            unless?: typeof unless;
        }
    }

    export = unless;
}