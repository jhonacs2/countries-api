import {ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

export function findEl<T>(fixture: ComponentFixture<T>, cssSelector: string): DebugElement {
  return queryByCss<T>(fixture, cssSelector);
}

export function queryByCss<T>(fixture: ComponentFixture<T>, selector: string): DebugElement {
  const debugElement = fixture.debugElement.query(By.css(selector));
  if (!debugElement) {
    throw new Error(`queryByCss: Element with ${selector} not found`);
  }
  return debugElement;
}

export function makeClickEvent(target: EventTarget): Partial<MouseEvent> {
  return {
    preventDefault(): void {
    },
    stopPropagation(): void {
    },
    stopImmediatePropagation(): void {
    },
    type: 'click',
    target,
    currentTarget: target,
    bubbles: true,
    cancelable: true,
    button: 0,
  };
}

export function click<T>(fixture: ComponentFixture<T>, cssClass: string): void {
  const element = findEl(fixture, cssClass);
  const event = makeClickEvent(element.nativeElement);
  element.triggerEventHandler('click', event);
}

export function makeKeyboardEvent(type: string, options: KeyboardEventInit): KeyboardEvent {
  return new KeyboardEvent(type, {...options});
}
