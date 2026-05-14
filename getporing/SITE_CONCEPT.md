# GetPoring Pre-Registration Site — Concept & Production Guide

## 1. Project Overview

| Item | Detail |
|---|---|
| **Project** | GetPoring Pre-Registration Landing Page |
| **Purpose** | Recruit pre-registrations for GetPoring HTML5 game + cross-promote with Ragnarok Zero |
| **Core Message** | "The Poring you raise becomes your companion in Ragnarok Zero!" |
| **Form** | Single Scroll Landing Page — HTML5 + CSS3 + Vanilla JS |
| **Device Priority** | Mobile-first |
| **Default Language** | English (EN) |
| **Supported Languages** | 7 — EN, ZH-CN, DE, FR, ID, TH, TR |
| **Language Control** | GNB language switcher → triggers `loadLang(locale)` in page JS |
| **Auth** | GNJOY OAuth (Gravity membership) via shared GNB |

---

## 2. Shared GNB Integration

### 2-A. GNB Structure (observed at mygnjoy.com)

```
┌──────────────────────────────────────────────────────────────┐
│  [GNJOY Logo]  (center)         🌐 EN ▾   🌙   [Sign Up] [Login]  │
└──────────────────────────────────────────────────────────────┘
```

| Element | Detail |
|---|---|
| Logo | GNJOY Logo — center-aligned |
| Language Switcher | 🌐 Globe + language code + dropdown (7 languages) |
| Dark Mode | Moon icon toggle |
| Sign Up | Outlined pill button |
| Login | Filled red pill button |
| Auth | GNJOY OAuth — Gravity membership (NOT social login) |

### 2-B. GNB Embed Proposal

**방식: `<iframe>` + postMessage 브릿지**

```
                     GetPoring Page
┌────────────────────────────────────────┐
│  <iframe src="https://www.mygnjoy.com/gnb/embed"   │  ← GNJOY 플랫폼에서 제공하는
│           id="gnjoy-gnb"                │    공용 GNB 임베드 URL (협의 필요)
│           height="64px" scrolling="no"> │
│  </iframe>                              │
├────────────────────────────────────────┤
│                                        │
│        GetPoring Page Content          │
│                                        │
└────────────────────────────────────────┘
```

**동작 원리:**
1. GNB iframe이 로드되면 GNJOY 플랫폼의 세션/쿠키를 공유
2. 로그인 상태 변경 → GNB iframe이 `postMessage({ type: 'auth', user: {...} })`로 부모 페이지에 전달
3. 언어 변경 → GNB iframe이 `postMessage({ type: 'lang', locale: 'en' })`으로 전달
4. 부모 페이지 JS가 메시지 수신 후 `loadLang(locale)` 또는 `onAuthChange(user)` 실행

```js
// parent page listener
window.addEventListener('message', (e) => {
  if (e.origin !== 'https://www.mygnjoy.com') return;
  if (e.data.type === 'lang')   loadLang(e.data.locale);
  if (e.data.type === 'auth')   onAuthChange(e.data.user);
});
```

> ⚠️ **플랫폼팀 확인 필요:** iframe embed URL 및 postMessage 이벤트 스펙은 GNJOY 플랫폼팀과 협의 후 확정. 대안으로 공용 JS SDK 방식도 가능 (`<script src="https://cdn.mygnjoy.com/gnb.js">`).

### 2-C. Auth Flow

1. 유저가 사전예약 CTA 클릭
2. 비로그인 상태 → 안내 모달 표시
   - *"You can proceed after logging in."*
   - `[Login]` 버튼 → GNB iframe의 로그인 트리거 또는 mygnjoy.com 로그인 페이지로 이동
   - `[Sign Up]` 버튼 → 회원가입 페이지로 이동
3. 로그인 완료 → 페이지 복귀 후 자동으로 사전예약 폼 활성화

---

## 3. Page Section Structure

```
[GNB]   ← Shared GNJOY component (iframe embed), fixed top
─────────────────────────────────────────
[1]  Hero
     — Game intro + Pre-Register CTA + live counter
─────────────────────────────────────────
[2]  Game Features
     — 3-card core gameplay loop intro
─────────────────────────────────────────
[3]  Pre-Registration
     — Login gate → agreement → submit → completion state
─────────────────────────────────────────
[4]  Pre-Reg Milestone
     — 5-tier goal (20K / 50K / 100K / 150K / 200K) with rewards
─────────────────────────────────────────
[5]  ROZ Cross-Promotion Event
     — Dual pre-reg reward + link to ROZ pre-reg page
─────────────────────────────────────────
[6]  Poring Compendium
     — Collectible character preview (22 types)
─────────────────────────────────────────
[7]  Footer
```

---

## 4. Section-by-Section Spec

### [GNB] Shared Navigation
- GNJOY 플랫폼 공용 GNB — iframe 방식으로 주입 (Section 2 참조)
- `position: fixed; top: 0; z-index: 9999;`
- 언어 변경 → `loadLang(locale)` 실행
- 로그인 후 → 우측에 유저 아바타/닉네임 표시

---

### [1] Hero Section

**Goal:** 게임 첫인상 + 즉시 사전예약 유도

**Layout (mobile):**
```
┌─────────────────────────────┐
│  [Pixel Room BG Wallpaper]  │
│                             │
│      [Get Poring Logo]      │
│                             │
│  "The Poring you raise      │
│   becomes your companion    │
│   in Ragnarok Zero!"        │
│                             │
│    [Character idle GIF]     │
│  💬 "Pre-register me! 🐣"   │
│                             │
│  [ PRE-REGISTER NOW  →  ]   │
│                             │
│  ██████████  32,148 Pre-Regs│
└─────────────────────────────┘
```

| Item | Detail |
|---|---|
| Background | `BG/BG_PNG/Bg_Object_Wallpaper_01.png` |
| Logo | `UI/로고/로고.png` |
| Character | `캐릭터 애니메이션/달팽이/달팽이_idle.gif` (default) |
| Speech bubble | Pixel-style `::after` CSS bubble — random tagline from i18n array |
| CTA button | `btn-primary` (yellow pixel button) → scrolls to [3] Pre-Reg section |
| Counter | `GET /reservation/count` → CountUp.js animation |

**i18n keys:** `hero.headline` · `hero.subheadline` · `hero.cta` · `hero.counter.label`

---

### [2] Game Features — Core Loop (3 Cards)

**Goal:** 겟포링이 어떤 게임인지 3단계로 압축 전달

**Background:** `{color.bg-cream}`
**Layout:** 3 cards — horizontal on desktop, vertical stack on mobile

| Card | Title (EN) | Body Copy (EN) | Asset |
|---|---|---|---|
| 1 | 🥚 Hatch Your Poring Egg | "Choose from 22 unique Poring eggs and raise your very own companion!" | `Obj/타코야끼알.png`, `Obj/파르페알.png`, `Obj/알.png` |
| 2 | 🍽️ Feed, Bathe & Go Outside! | "Manage hunger, affection, and fatigue. Take your Poring out to meet new friends!" | `UI/외출하기/외출하기_둘러보기.png` |
| 3 | 🎮 Send to Ragnarok Zero | "Your fully grown Poring becomes a companion pet in ROZ. On the go with GetPoring, at home with ROZ!" | `UI/외출하기/외출하기_호감도.png` |

**i18n keys:** `features.card{1-3}.title` · `features.card{1-3}.body`

---

### [3] Pre-Registration Section

**Goal:** 회원 로그인 후 사전예약 신청 완료

> **Reference:** ROZ pre-registration form UX — same pattern adapted to GetPoring design.

#### State A — Not Logged In
```
┌───────────────────────────────┐
│   Pre-Register for GetPoring  │
│                               │
│  [Character with speech bubble│
│   "Login to pre-register!"]   │
│                               │
│  "You can proceed after       │
│   logging in."                │
│                               │
│  [ Login ]   [ Sign Up ]      │
└───────────────────────────────┘
```

#### State B — Logged In (form active)
```
┌───────────────────────────────┐
│   Pre-Register for GetPoring  │
│                               │
│  ☐  I agree to pre-register   │
│     and receive promotional   │
│     messages  (link: Terms)   │
│                               │
│  [ PRE-REGISTER NOW  →  ]     │
│  (disabled until ☑ checked)   │
│                               │
│  Pre-registration precautions │
│  ▼ (collapsible accordion)    │
└───────────────────────────────┘
```

#### State C — Completed
```
┌───────────────────────────────┐
│  ✅ Pre-Registration Complete! │
│  Welcome, [Nickname]!          │
│                               │
│  Your direct rewards:         │
│  🥚 Starter Poring Egg        │
│  💊 Care Item Starter Set     │
│                               │
│  [ 🔗 Share My Poring Card ]  │
└───────────────────────────────┘
```

**Direct rewards (given upon registration, regardless of milestones):**
- Starter Poring Egg (Basic)
- Care Item Starter Set (Bath + Medicine)

**i18n keys:** `prereg.title` · `prereg.login.prompt` · `prereg.login.btn` · `prereg.signup.btn` · `prereg.agree` · `prereg.cta` · `prereg.precautions` · `prereg.done.title` · `prereg.done.body` · `prereg.reward.title`

---

### [4] Pre-Reg Milestone Section

**Goal:** 누적 사전예약자 수 달성 시 단계별 보상 공개 → 참여 독려

**Milestones: 20K / 50K / 100K / 150K / 200K**

```
[ Pre-Registration Milestones ]

Current: 32,148 pre-registrations

  ✅Tier1   🔒Tier2   🔒Tier3   🔒Tier4   🔒Tier5
  20,000    50,000   100,000   150,000   200,000
  ──────────────────────────────────────
  ████████░░░░░░░░░░░░░░░░░░░░  32,148

[ Reward cards — active: colored / locked: grey + lock icon ]
```

**Milestone Reward Table:**

| Tier | Target | Reward (EN) | Icon Asset |
|---|---|---|---|
| Tier 1 | 20,000 | In-Game Currency (Zeny + Gems) | `Obj/알.png` |
| Tier 2 | 50,000 | Care Item Set (Bath + Medicine + Food) | `Obj/Care_Item_Bath_01.png` + `Care_Item_Medi_01.png` + `Care_Item_Food_05.png` |
| Tier 3 | 100,000 | Limited Takoyaki Egg | `Obj/타코야끼알.png` |
| Tier 4 | 150,000 | ROZ Poring Vice Item *(cross-promo)* | *(ROZ team asset — TBD)* |
| Tier 5 | 200,000 | Parfait Poring Skin + Special Rare Pet | `캐릭터 애니메이션/파르페/파르페포링_happy.gif` |

**UI Behavior:**
- 진입 시 게이지가 0 → 현재 달성률까지 `1.5s ease-out` 애니메이션
- 달성 티어: 보상 카드 컬러 활성화 + 픽셀 confetti 연출 (`party.js`)
- 미달성 티어: `opacity: 0.5` + 자물쇠 아이콘 오버레이 + 캐릭터 `_sick.gif`

**i18n keys:** `milestone.title` · `milestone.current.label` · `milestone.tier{1-5}.target` · `milestone.tier{1-5}.reward` · `milestone.locked.label`

---

### [5] ROZ Cross-Promotion Event

**Goal:** 두 게임 모두 사전예약 시 추가 통합 리워드 지급 + ROZ 사전예약 페이지 연결

**Headline (EN):** "Pre-register both games for special combined rewards!"
**Sub-copy (EN):** "On the go with GetPoring, at home with ROZ"

**Layout:**
```
┌────────────────────────────────────────────────┐
│  🎮  GetPoring  ×  Ragnarok Zero: Global        │
│                                                │
│  ┌──────────────┐   →→→   ┌──────────────────┐  │
│  │  GetPoring   │         │  Ragnarok Zero   │  │
│  │  Pre-Reg ✅  │  ＋＝🎁 │  Pre-Reg  🔲    │  │
│  └──────────────┘         └──────────────────┘  │
│                                                │
│  Both complete → MISSION CLEAR 🎉              │
│  Special combined reward unlocked!             │
│                                                │
│  [ Go to ROZ Pre-Registration  →  ]            │
│  (roz.mygnjoy.com/en/event/prereservation)     │
└────────────────────────────────────────────────┘
```

**Status Logic (login required):**
| GetPoring | ROZ | UI State |
|---|---|---|
| ❌ | ❌ | Both boxes unchecked, CTA highlighted |
| ✅ | ❌ | GetPoring checked, ROZ CTA pulsing |
| ✅ | ✅ | MISSION CLEAR stamp + combined reward modal |

**ROZ CTA Button:** `btn-red` → `https://roz.mygnjoy.com/en/event/prereservation` (external, `target="_blank"`)

**Combined reward content:** TBD (confirm with ROZ team)

**i18n keys:** `roz.event.title` · `roz.event.body` · `roz.event.cta` · `roz.status.getporing` · `roz.status.roz` · `roz.status.complete` · `roz.reward.title`

---

### [6] Poring Compendium

**Goal:** 수집 가능한 22종 캐릭터 공개 → 수집 욕구 자극

**Replicates in-game Compendium UI** (ref: `UI/도감/도감.png`)

- 3 tabs: **Baby** / **Teen** / **Adult**
- 4-column icon grid
- Unlocked: colored icon + name — hover/tap → `_happy.gif` for 1.5s
- Locked: greyscale silhouette + `?` — `filter: grayscale(100%) opacity(0.4)`

**i18n keys:** `compendium.title` · `compendium.tab.baby` · `compendium.tab.teen` · `compendium.tab.adult` · `compendium.locked`

---

### [7] Footer

| Element | Content |
|---|---|
| Company | *(Operator name — TBD)* |
| Address | *(TBD)* |
| Business Reg. No. | *(TBD)* |
| Customer Service | *(Email / channel — TBD)* |
| Links | Privacy Policy · Terms of Service |
| SNS | Discord · Instagram · TikTok · YouTube |
| Copyright | © 2026 GNJOY. All Rights Reserved. |

---

## 5. Tech Stack

```
Frontend:    HTML5 + CSS3 + Vanilla JS
GNB:         GNJOY shared GNB — iframe embed + postMessage bridge
Auth:        GNJOY OAuth via GNB (Gravity membership)
i18n:        /lang/{locale}.json + loadLang() function
Fonts:       Google Fonts — Nanum Round Gothic, Black Han Sans
Animation:   CSS @keyframes + CountUp.js + party.js (confetti)
Deploy:      TBD (GNJOY infra / Vercel / Netlify)
```

**Backend APIs required:**

| Endpoint | Function |
|---|---|
| `GET /reservation/count` | Live total pre-reg count (Hero counter + Milestone gauge) |
| `GET /reservation/me` | Current user pre-reg status |
| `POST /reservation` | Submit pre-registration |
| `GET /milestone/status` | Which tiers are currently reached |
| `GET /roz/prereservation/me` | ROZ pre-reg status for this user (cross-promo check) |

---

## 6. i18n Key Reference

```
# GNB (handled by GNJOY platform)

# Hero
hero.headline           hero.subheadline        hero.cta
hero.counter.label      hero.bubble[]           (array of random taglines)

# Game Features
features.title
features.card1.title    features.card1.body
features.card2.title    features.card2.body
features.card3.title    features.card3.body

# Pre-Registration
prereg.title            prereg.login.prompt
prereg.login.btn        prereg.signup.btn
prereg.agree            prereg.cta
prereg.precautions      prereg.precautions.body
prereg.done.title       prereg.done.body
prereg.reward.title     prereg.reward.item1     prereg.reward.item2

# Milestone
milestone.title         milestone.current.label
milestone.tier1.target  milestone.tier1.reward
milestone.tier2.target  milestone.tier2.reward
milestone.tier3.target  milestone.tier3.reward
milestone.tier4.target  milestone.tier4.reward
milestone.tier5.target  milestone.tier5.reward
milestone.locked.label

# ROZ Cross-Promo
roz.event.title         roz.event.body          roz.event.cta
roz.status.getporing    roz.status.roz          roz.status.complete
roz.reward.title        roz.reward.body

# Compendium
compendium.title        compendium.tab.baby
compendium.tab.teen     compendium.tab.adult
compendium.locked

# Footer
footer.privacy          footer.terms            footer.cs
footer.copyright
```

---

## 7. Pre-Launch Checklist

- [ ] Milestone reward content for Tier 4 (ROZ Poring Vice item — ROZ team)
- [ ] ROZ cross-promo combined reward content confirmed
- [ ] Event period (start ~ end date)
- [ ] Operator company legal info (name, address, business reg.)
- [ ] Privacy Policy full text (legal review)
- [ ] Official SNS channel URLs
- [ ] Backend API server environment decided
- [ ] Game launch date (for optional countdown banner)
- [ ] GNJOY GNB embed spec confirmed with platform team (iframe URL / JS SDK)
