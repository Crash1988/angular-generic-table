"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GtVisiblePipe = (function () {
    function GtVisiblePipe() {
        // TODO: move to helper functions
        /** Sort by column order */
        this.getColumnOrder = function (a, b) {
            if (a.columnOrder < b.columnOrder)
                return -1;
            if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined')
                return 1;
            return 0;
        };
    }
    GtVisiblePipe.prototype.transform = function (array, settings) {
        var visibleColumns = settings.sort(this.getColumnOrder).map(function (setting) {
            if (setting.visible !== false && setting.enabled !== false) {
                return setting.objectKey;
            }
        });
        var columns = array.filter(function (column) {
            return visibleColumns.indexOf(column.objectKey) !== -1;
        }).sort(function (a, b) {
            return visibleColumns.indexOf(a.objectKey) < visibleColumns.indexOf(b.objectKey) ? -1 : 1;
        });
        return columns;
    };
    GtVisiblePipe = __decorate([
        core_1.Pipe({
            name: 'gtVisible'
        })
    ], GtVisiblePipe);
    return GtVisiblePipe;
}());
exports.GtVisiblePipe = GtVisiblePipe;