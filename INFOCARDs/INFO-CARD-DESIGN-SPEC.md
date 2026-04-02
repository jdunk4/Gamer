# ARCADE INFO CARD — DESIGN SPEC
# Use this file as the blueprint when creating new info cards.
# All values are production-ready and match the live cards.

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# FONT
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Font Family : Barlow Condensed (Google Fonts)
Import URL  : https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;1,800&display=swap
Title Style : font-size 28px, font-weight 800, font-style italic, color #fff
Subtitle    : font-size 11px, font-weight 600, color rgba(255,255,255,0.72)
Badge Text  : font-size 10px, font-weight 800, letter-spacing 2px, uppercase, color #fff
Stat Key    : font-size 9px, font-weight 600, letter-spacing 2px, uppercase, color #3d5a70
Stat Value  : font-size 13px, font-weight 700, color #fff
Button      : font-size 14px, font-weight 800, letter-spacing 4px, uppercase, color #fff

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# CARD SHELL
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Width           : 280px
Background      : #0d1b2a  (dark navy — used for body + stats area)
Border Radius   : 10px
Box Shadow      : 0 8px 32px rgba(0,0,0,0.6)
Page Background : #1a1a2e

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# HEADER SECTION
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Padding : 12px 14px 10px

Header background color is determined by difficulty:
  Casual       → #27ae60  (dark green)
  Intermediate → #2ecc40  (bright green)
  Advanced     → #f1c40f  (yellow)
  Expert       → #e67e22  (orange)
  Master       → #8b4513  (brown)
  Grandmaster  → #8e44ad  (purple)

# ── BADGE (inside header) ──
Layout          : inline-flex, align-items center, gap 5px
Background      : rgba(0,0,0,0.22)
Border Radius   : 4px
Padding         : 3px 8px 3px 6px
Margin Bottom   : 6px
Content         : "[DIFFICULTY TEXT]" + icons 🍄⭐
  NOTE: Only mushroom + star. Do NOT include 🟢 (yoshi egg removed).

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# DIFFICULTY BAR SECTION
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background      : #0d1b2a
Padding         : 12px 14px 10px
Border Bottom   : 1px solid #16293d

Label           : "DIFFICULTY SCALE", font-size 8px, color #3d5a70, letter-spacing 3px, uppercase, margin-bottom 9px

Bar Track:
  Height        : 8px
  Border Radius : 4px
  Gradient      : linear-gradient(90deg,
                    #27ae60  0%,    ← Casual (green)
                    #a8d800 20%,    ← Inter  (yellow-green)
                    #f1c40f 40%,    ← Advanced (yellow)
                    #e67e22 60%,    ← Expert (orange)
                    #7d3c00 80%,    ← Master (brown)
                    #8e44ad 100%    ← Grandmaster (purple)
                  )

Dot Marker (white circle on bar):
  Size          : 15px × 15px
  Background    : #fff
  Border Radius : 50%
  Border        : 3px solid [dot-color] — see table below
  Box Shadow    : 0 0 8px [dot-color at 70% opacity]
  Position      : absolute, top 50%, left = [left%] — see table below
  Transform     : translate(-50%, -50%)

  Difficulty dot positions and border colors:
  ┌──────────────┬───────┬──────────┐
  │ Difficulty   │ left% │ color    │
  ├──────────────┼───────┼──────────┤
  │ Casual       │  0%   │ #27ae60  │
  │ Intermediate │ 16.7% │ #c8e800  │
  │ Advanced     │ 33.3% │ #f1c40f  │
  │ Expert       │ 50%   │ #e67e22  │
  │ Master       │ 66.7% │ #7d3c00  │
  │ Grandmaster  │ 83.3% │ #8e44ad  │
  └──────────────┴───────┴──────────┘

Tick Labels (below bar):
  Layout        : flex, space-between, margin-top 9px
  Default color : #3d5a70, font-size 7.5px
  Active label  : font-weight 800, font-size 9px
  Active color is determined by difficulty:
  ┌──────────────┬──────────┐
  │ Difficulty   │ color    │
  ├──────────────┼──────────┤
  │ Casual       │ #27ae60  │
  │ Intermediate │ #2ecc40  │
  │ Advanced     │ #f1c40f  │
  │ Expert       │ #e67e22  │
  │ Master       │ #7d3c00  │
  │ Grandmaster  │ #8e44ad  │
  └──────────────┴──────────┘

  Tick label text (6 labels, left to right):
  Casual | Inter. | Advanced | Expert | Master | Grandmaster

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# STATS ROWS
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background      : #0d1b2a
Padding per row : 8px 14px
Border between  : 1px solid #16293d
Last row        : no border

6 rows in this order:
  Author    | [author name]
  Difficulty| [difficulty]
  Type      | [type]
  Base Game | [base game]
  Platform  | [platform]
  Source    | [source]

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# LAUNCH BUTTON
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background  : #ff8c00
Border Top  : 2px solid #cc7000
Padding     : 13px
Text        : "PRESS E TO LAUNCH GAME"
Text Shadow : 1px 1px 2px rgba(0,0,0,0.25)

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# EXISTING CARDS (for reference)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Arcade B — A Plumber for All Seasons
  Author: wye | Difficulty: Intermediate | Type: Adventure
  Base Game: Super Mario World | Platform: SNES | Source: SMW Central

Arcade C — SMB3 Mix
  Author: Southbird | Difficulty: Advanced | Type: Adventure
  Base Game: Super Mario Bros 3 | Platform: NES | Source: ROM Hacking

Arcade D — The Rainbow Realms v1.3
  Author: Bluecrush | Difficulty: Intermediate | Type: Adventure
  Base Game: Super Mario Bros 3 | Platform: NES | Source: ROM Hacking

Arcade E — Rainbow Realms 2
  Author: Bluecrush | Difficulty: Intermediate | Type: Adventure
  Base Game: Super Mario Bros 3 | Platform: NES | Source: ROM Hacking

Kaizo Mario World (existing card — not rebuilt here, already live)
  Author: T. Takemoto | Difficulty: Expert | Type: Kaizo
  Base Game: Super Mario World | Platform: SNES | Source: SMW Central
