System.register(['./hero', 'angular2/core', './hero.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var hero_1, core_1, hero_service_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(heroService) {
                    this.heroService = heroService;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', hero_1.Hero)
                ], HeroDetailComponent.prototype, "hero", void 0);
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        template: "\n      \t<div *ngIf=\"hero\">\n  \t<h2>{{hero.name}} details!</h2>\n  \t<div><label>id: </label>{{hero.id}}</div>\n  \t<div>\n    \t<label>name: </label>\n    \t<input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n  \t</div>\n\t</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            }());
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map