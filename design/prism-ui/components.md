# Prism UI — Component specifications

Reference for building Figma components. All values from `tokens.json`.

## Button

| Property | Variants |
|----------|----------|
| Variant | primary, secondary, ghost, danger |
| Size | sm (32px), md (40px), lg (48px) |
| State | default, hover, pressed, disabled, loading |

**Anatomy:** Label, optional leading/trailing icon, 8px radius, 500 weight label text.

## Input

| Property | Variants |
|----------|----------|
| State | default, focus, error, disabled |
| Optional | label, helper text, error message |

**Anatomy:** Label (label-sm), field (40px height), 8px radius, 16px horizontal padding.

## Badge / Tag

| Property | Variants |
|----------|----------|
| Tone | neutral, success, warning, error, info |
| Style | Badge (pill), Tag (rounded-md, dismissible) |

## Modal

| Property | Variants |
|----------|----------|
| Size | sm (400px), md (560px), lg (720px) |
| Includes | overlay, header, body, footer actions |

## Table row pattern

| Property | Variants |
|----------|----------|
| State | default, hover, selected |
| Cell types | text, badge, avatar+text, actions |

## Sidebar nav item

| Property | Variants |
|----------|----------|
| State | default, hover, active |
| Optional | icon, badge count |

## Status labels

- **Ready** — green badge, production-approved
- **In review** — amber badge, pending design QA
- **Deprecated** — gray, do not use in new work

## Dev handoff notes

1. Export color/spacing/radius as CSS variables matching token paths
2. Component props should map 1:1 to Figma variant properties
3. Document min touch target 44×44px for mobile patterns
4. WCAG AA contrast required for all text/background pairs
