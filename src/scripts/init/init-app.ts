/* -- Imports -- */
import "../tools/global-access.js";
import "../tools/index.js";
import "../index.js";
import "../../Error/base.js"
import "./init-global-tools.js";

function InitApp(Root: HTMLElement, LocaleTimeZone?: string) {
    try {
        console.log(Root, LocaleTimeZone);
        InitGlobalTools();
    } catch (e) {
       ERROR("Failed to initialize application contents! Error:", e); 
    }
}

(() => MakeGlobal("InitApp", InitApp))();