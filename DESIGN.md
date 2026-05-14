# 겟포링(Get Poring) 디자인 시스템

## Overview

겟포링 사이트의 모든 시각적 표현은 게임 내 UI에서 직접 추출한 색상·형태·레이아웃 어휘를 그대로 계승한다. 사이트를 여는 순간 유저는 자신이 게임 화면 안에 있는 것처럼 느껴야 하며, 모든 컴포넌트는 실제 게임 UI 스크린샷을 레퍼런스로 삼아 제작된다. 디자인의 언어는 **"귀여운 레트로 픽셀 아트 + 따뜻한 파스텔 인테리어"** 의 조합이다.

---

## 1. 색상 팔레트 (Color Palette)

> 아래 모든 색상 값은 `img-assets` 내 스크린샷에서 직접 스포이트 추출한 값이다.

### 브랜드 포인트 컬러
| 토큰 | Hex | 용도 |
|---|---|---|
| `{color.brand-yellow}` | `#F5A623` | 핵심 CTA 버튼, 주요 픽셀 버튼 배경, 아이콘 프레임 배경 |
| `{color.brand-yellow-dark}` | `#D4861A` | 버튼 하단 픽셀 그림자(Pressed 효과), 탭 패널 배경 |
| `{color.brand-red}` | `#E05A5A` | 제목 배너(도감, 길거리 등), 탭 선택 활성 배경, 경고 |
| `{color.brand-red-dark}` | `#C04040` | 빨간 배너 하단 픽셀 그림자 |
| `{color.brand-pink}` | `#F4A0A8` | 플러스 버튼, 경험치·호감도 게이지 바 채움 색상 |
| `{color.brand-pink-light}` | `#FDD5D5` | 게이지 바 트랙(배경) |

### 서피스(Surface) 컬러
| 토큰 | Hex | 용도 |
|---|---|---|
| `{color.surface-warm-cream}` | `#F5E6C8` | 기본 카드 배경, 패널 내부, 도감 리스트 행 배경 |
| `{color.surface-warm-tan}` | `#E8D5A8` | 카드 내부 중간 톤, 탭 비활성 배경 |
| `{color.surface-brown}` | `#6B3A2A` | 픽셀 테두리(굵은 외곽선), 버튼 그림자 최하단 레이어 |
| `{color.surface-dark-brown}` | `#3D1F10` | 가장 어두운 픽셀 외곽선, 닫기(X) 버튼 배경 |
| `{color.bg-poring-yellow}` | `#F5B83A` | 로딩 화면 배경, 포링 패턴 배경 |

### 배경 파스텔 컬러
| 토큰 | Hex | 용도 |
|---|---|---|
| `{color.bg-pink-soft}` | `#F2CDD0` | 배경 좌측 벽, 따뜻한 실내 분위기 |
| `{color.bg-lavender}` | `#DCCCE8` | 배경 우측 벽, 보라-라벤더 계열 |
| `{color.bg-cream}` | `#FFF3E0` | 배경 메인 실내(바닥·중앙 영역) |
| `{color.bg-floor-pink}` | `#F0C8B0` | 게임 룸 바닥 타일 |
| `{color.bg-sky}` | `#B8DFF0` | 외출 배경 하늘, 개방감이 필요한 영역 |

### 텍스트 컬러
| 토큰 | Hex | 용도 |
|---|---|---|
| `{color.text-primary}` | `#3D1F10` | 기본 본문 텍스트 (어두운 갈색) |
| `{color.text-on-red}` | `#FFFFFF` | 빨간 배너 위 텍스트 (흰색) |
| `{color.text-on-yellow}` | `#3D1F10` | 노란 버튼 위 텍스트 (어두운 갈색) |
| `{color.text-mute}` | `#8B6A50` | 보조 설명 텍스트, 라벨 |
| `{color.text-link}` | `#5A8FD4` | 인라인 링크 텍스트 |

---

## 2. 타이포그래피 (Typography)

### 폰트 패밀리
- **한국어 본문:** `Nanum Gothic`, `Malgun Gothic`, `Apple SD Gothic Neo`, `sans-serif`
- **한국어 헤드라인 (둥글둥글하게):** `Nanum Round Gothic` 또는 `Black Han Sans` — 게임 로고 타이틀의 통통하고 귀여운 느낌 계승
- **영문 헤드라인:** 게임 로고 스타일과 유사한 **Baloo 2** 또는 **Nunito** (rounded sans) 사용
- **영문 픽셀 강조:** CSS `image-rendering: pixelated` 처리된 픽셀 폰트 이미지 사용 (버튼 레이블 등)

### 계층 구조
| 토큰 | 폰트 | 크기 | 굵기 | 용도 |
|---|---|---|---|---|
| `{typography.hero-title}` | Black Han Sans | 48–72px (vw 기반 반응형) | 900 | 사이트 대형 타이틀 |
| `{typography.section-title}` | Nanum Round Gothic | 28–36px | 700 | 섹션 제목 |
| `{typography.card-title}` | Nanum Gothic | 18–22px | 700 | 카드 및 배너 제목 |
| `{typography.body}` | Nanum Gothic | 15–17px | 400 | 일반 본문 |
| `{typography.caption}` | Nanum Gothic | 12–14px | 400 | 캡션, 주석, 작은 라벨 |
| `{typography.button}` | Nanum Round Gothic | 16–20px | 700 | 버튼 레이블 |

---

## 3. 간격 시스템 (Spacing)
- **기본 단위:** 8px (픽셀 아트 격자에 맞춰 4의 배수 사용)
- `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 80–96px

---

## 4. 형태 & 테두리 시스템 (Shapes & Borders)

### 픽셀 버튼 구조 (핵심 패턴)
게임 UI의 모든 버튼은 **3-레이어 픽셀 입체 구조**를 가진다. 웹에서는 CSS `box-shadow`로 이를 재현한다:
```css
/* 겟포링 표준 픽셀 버튼 예시 */
.pixel-btn-yellow {
  background: #F5A623;            /* 레이어 1: 버튼 상면 */
  border: 3px solid #3D1F10;      /* 픽셀 외곽선 */
  border-radius: 12px;
  box-shadow:
    0 4px 0 #D4861A,              /* 레이어 2: 측면 그림자 */
    0 6px 0 #3D1F10;              /* 레이어 3: 최하단 윤곽 */
}
.pixel-btn-yellow:active {
  transform: translateY(4px);
  box-shadow:
    0 0px 0 #D4861A,
    0 2px 0 #3D1F10;
}
```

### Border Radius 규칙
| 토큰 | 값 | 용도 |
|---|---|---|
| `{rounded.pixel}` | 4px | 아이콘 셀, 미니 뱃지 |
| `{rounded.card}` | 12px | 게임 UI 카드, 패널 |
| `{rounded.btn}` | 12px | 기본 버튼 |
| `{rounded.pill}` | 9999px | 상단 재화 바, 프로필 아바타 |

### 픽셀 외곽선 두께
- **주요 컴포넌트 외곽선:** `3px solid {color.surface-brown}` — 버튼, 카드 패널
- **섹션 내 구분선:** `2px solid {color.surface-warm-tan}`
- **인라인 구분선:** `1px dashed {color.surface-warm-tan}`

---

## 5. 컴포넌트 (Components)

### 5.1 픽셀 CTA 버튼
**`btn-primary`** — 노란 픽셀 버튼 (게임 "Game Start" 버튼과 동일)
- 배경 `{color.brand-yellow}`, 텍스트 `{color.text-on-yellow}`, `{typography.button}`, `border-radius: 12px`, `3px solid #3D1F10`, 3레이어 픽셀 그림자
- 사용처: 사전예약 CTA, 마일스톤 보상 확인

**`btn-red`** — 빨간 픽셀 버튼 (게임 "만나기", "돌아가기" 버튼과 동일)
- 배경 `{color.brand-red}`, 텍스트 `{color.text-on-red}`, 동일 픽셀 그림자 구조
- 사용처: 라그나로크 제로 연동 이벤트 CTA

**`btn-disabled`**
- 배경 `{color.surface-warm-tan}`, 텍스트 `{color.text-mute}`, 그림자 없음

### 5.2 픽셀 배너 헤더
게임의 "도감", "둘러보기" 등의 화면 상단에 쓰이는 빨간 가로 배너
- 배경 `{color.brand-red}`, 텍스트 `{color.text-on-red}`, `{typography.card-title}`, 좌우에 픽셀 장식 점(dot) 2개, `box-shadow: 0 3px 0 {color.brand-red-dark}`

### 5.3 게임 카드 패널
게임의 "둘러보기" 리스트 카드 재현
- 배경 `{color.surface-warm-cream}`, `border: 3px solid {color.surface-brown}`, `border-radius: 12px`
- 내부 구성: 좌측 픽셀 캐릭터 썸네일(폴라로이드 느낌, 흰 배경 + 테이프 장식) + 우측 텍스트 블록

### 5.4 상단 재화 바 (Top HUD Bar)
게임의 코인(Z)/젬 상태 바 재현 — 마일스톤 카운터 등에 활용
- 배경 `{color.surface-warm-cream}`, `border: 3px solid {color.surface-brown}`, `border-radius: 9999px`
- 내부 아이콘(코인 또는 마일스톤 아이콘) + 숫자 텍스트 + `+` 버튼 동반

### 5.5 경험치/진행 게이지 바
게임의 먹이 게이지, 호감도 게이지 재현 — 사전예약 마일스톤 진행 바에 사용
- 트랙 배경 `{color.brand-pink-light}`, 채움 `{color.brand-pink}`, `border-radius: 9999px`, `border: 2px solid {color.surface-brown}`
- 게이지 상에 마일스톤 체크 포인트를 `position: absolute`로 배치

### 5.6 도감 아이콘 셀
게임의 도감(Baby/Teen/Adult) 캐릭터 아이콘 그리드 셀 재현 — 캐릭터 미리보기 섹션에 사용
- 배경 `{color.surface-warm-cream}`, `border: 3px solid {color.brand-yellow-dark}`, `border-radius: 12px`
- 잠금 상태: 배경 `{color.surface-warm-tan}`, `?` 실루엣 이미지, `opacity: 0.6`

### 5.7 픽셀 말풍선
게임의 로딩 화면 TIP 말풍선 재현
- 배경 `#FFFFFF`, `border: 3px solid {color.surface-brown}`, `border-radius: 8px`
- 꼬리: CSS 삼각형 (`::after`) 또는 픽셀 이미지로 구현

### 5.8 탭 컴포넌트
게임의 "캐릭터 / 가족" 2탭 구조 재현
- 활성 탭: 배경 `{color.brand-pink}`, 텍스트 `{color.text-on-red}`, 하단 보더 없음
- 비활성 탭: 배경 `{color.surface-warm-tan}`, 텍스트 `{color.text-mute}`

### 5.9 네비게이션 바
- 배경 `{color.bg-poring-yellow}` (로딩 화면 노란 배경 톤)
- 로고(Get Poring 로고 이미지) 좌측 배치, 우측 SNS 링크 + 메뉴 아이콘
- 하단 `3px solid {color.surface-brown}` 구분선

### 5.10 푸터
- 배경 `{color.surface-brown}` (진한 갈색)
- 텍스트 `{color.surface-warm-cream}` (크림색)
- 회사 정보, 개인정보처리방침 링크, 고객센터

---

## 6. 배경 및 이미지 운용 규칙

### 6.1 메인 배경
- **사이트 배경 기본값:** `Bg_Object_Wallpaper_01.png` (라벤더+핑크 실내 배경) 또는 `Bg_Object_Floor_02.png` 등 BG_PNG 내 에셋 재활용
- 배경 이미지는 `background-size: cover`, `image-rendering: pixelated` 적용하여 도트 질감을 살린다.

### 6.2 캐릭터 이미지
- `캐릭터 애니메이션` 폴더의 각 캐릭터 (파르페, 타코야끼, 삼색냥 등) 이미지는 `<img>` 태그로 배치하되, 스프라이트 애니메이션이 존재하는 경우 CSS `@keyframes`로 bounce/idle 루프를 구현한다.
- 모든 캐릭터 이미지: `image-rendering: pixelated` 필수 적용.

### 6.3 오브젝트 아이콘 (Obj 폴더)
- `Care_Item_*` 및 `알` 시리즈 이미지 — 마일스톤 보상 아이콘으로 활용
- `Icon_Growth_Baby/Teen/Adult.png` — 성장 단계 소개 섹션 아이콘으로 활용
- 모든 Obj 이미지: `image-rendering: pixelated` 적용, 크기는 `width: 64px` 또는 `width: 48px`를 기본값으로

### 6.4 UI 스크린샷 활용
- `메인화면.png` — Hero 섹션 게임 미리보기 쇼케이스
- `로고.png` — 내비게이션 로고
- `도감.png`, `도감_팝업.png` — 캐릭터 도감 소개 섹션 배경 또는 삽화
- `외출하기_둘러보기.png`, `외출하기_호감도.png` — 게임플레이 소개 섹션 삽화

---

## 7. 애니메이션 & 인터랙션

- **픽셀 버튼 Pressed:** `transform: translateY(4px)` + box-shadow 축소 (즉시 반응, 0ms transition)
- **캐릭터 Idle Bounce:** `@keyframes idle-bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }` — 2s infinite
- **게이지 채우기:** `width` 트랜지션 `1.5s ease-out` — 페이지 진입 시 0에서 현재 달성률까지 채워지는 연출
- **말풍선 등장:** `@keyframes pop-in { from { transform: scale(0.7); opacity: 0; } to { transform: scale(1); opacity: 1; } }` — 0.3s ease-out
- **마일스톤 달성 연출:** CSS confetti 또는 픽셀 파티클 라이브러리 (`party.js` 등) 활용

---

## 8. 반응형 브레이크포인트

| 이름 | 너비 | 주요 변화 |
|---|---|---|
| desktop | 1200px+ | 2-컬럼 레이아웃, 대형 Hero 이미지 |
| tablet | 768px | 1-컬럼 전환, 섹션 패딩 축소 |
| mobile | 480px | 세로 중심 레이아웃, Hero가 실제 폰 게임기처럼 보임 |

- **모바일 핵심 전략:** 모바일(480px)에서 사이트가 실제 스마트폰 게임 화면처럼 느껴지도록 Hero 섹션의 게임 룸 배경이 화면 전체를 꽉 채우게 한다.
