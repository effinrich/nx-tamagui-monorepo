type Theme = {
  accentBackground: string
  accentColor: string
  background0: string
  background025: string
  background05: string
  background075: string
  color1: string
  color2: string
  color3: string
  color4: string
  color5: string
  color6: string
  color7: string
  color8: string
  color9: string
  color10: string
  color11: string
  color12: string
  color0: string
  color025: string
  color05: string
  color075: string
  background: string
  backgroundHover: string
  backgroundPress: string
  backgroundFocus: string
  borderColor: string
  borderColorHover: string
  borderColorPress: string
  borderColorFocus: string
  color: string
  colorHover: string
  colorPress: string
  colorFocus: string
  colorTransparent: string
  placeholderColor: string
  outlineColor: string
}

function t(a: [number, number][]) {
  let res: Record<string, string> = {}
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string
  }
  return res as Theme
}
const vs = [
  'hsla(292, 80%, 65%, 1)',
  'hsla(320, 60%, 99%, 0)',
  'hsla(320, 60%, 99%, 0.25)',
  'hsla(320, 60%, 99%, 0.5)',
  'hsla(320, 60%, 99%, 0.75)',
  'hsla(302, 43%, 99%, 1)',
  'hsla(302, 43%, 94%, 1)',
  'hsla(302, 43%, 88%, 1)',
  'hsla(302, 43%, 83%, 1)',
  'hsla(302, 43%, 77%, 1)',
  'hsla(302, 43%, 72%, 1)',
  'hsla(302, 43%, 66%, 1)',
  'hsla(302, 43%, 61%, 1)',
  'hsla(302, 43%, 55%, 1)',
  'hsla(302, 43%, 50%, 1)',
  'hsla(0, 15%, 15%, 1)',
  'hsla(0, 15%, 10%, 1)',
  'hsla(0, 14%, 10%, 0)',
  'hsla(0, 14%, 10%, 0.25)',
  'hsla(0, 14%, 10%, 0.5)',
  'hsla(0, 14%, 10%, 0.75)',
  'hsla(292, 80%, 55%, 1)',
  'hsla(302, 43%, 29%, 0)',
  'hsla(302, 43%, 29%, 0.25)',
  'hsla(302, 43%, 29%, 0.5)',
  'hsla(302, 43%, 29%, 0.75)',
  'hsla(302, 43%, 29%, 1)',
  'hsla(302, 43%, 31%, 1)',
  'hsla(302, 43%, 34%, 1)',
  'hsla(302, 43%, 36%, 1)',
  'hsla(302, 43%, 38%, 1)',
  'hsla(302, 43%, 41%, 1)',
  'hsla(302, 43%, 43%, 1)',
  'hsla(302, 43%, 45%, 1)',
  'hsla(302, 43%, 48%, 1)',
  'hsla(0, 15%, 93%, 1)',
  'hsla(0, 15%, 95%, 1)',
  'hsla(0, 15%, 95%, 0)',
  'hsla(0, 15%, 95%, 0.25)',
  'hsla(0, 15%, 95%, 0.5)',
  'hsla(0, 15%, 95%, 0.75)',
  'hsla(292, 80%, 65%, 0)',
  'hsla(292, 80%, 65%, 0.25)',
  'hsla(292, 80%, 65%, 0.5)',
  'hsla(292, 80%, 65%, 0.75)',
  'hsla(250, 50%, 95%, 1)',
  'hsla(249, 52%, 95%, 0)',
  'hsla(249, 52%, 95%, 0.25)',
  'hsla(249, 52%, 95%, 0.5)',
  'hsla(249, 52%, 95%, 0.75)',
  'hsla(292, 79%, 19%, 0)',
  'hsla(292, 79%, 19%, 0.25)',
  'hsla(292, 79%, 19%, 0.5)',
  'hsla(292, 79%, 19%, 0.75)',
  'hsla(292, 80%, 19%, 1)',
  'hsla(292, 80%, 24%, 1)',
  'hsla(292, 80%, 28%, 1)',
  'hsla(292, 80%, 33%, 1)',
  'hsla(292, 80%, 37%, 1)',
  'hsla(292, 80%, 42%, 1)',
  'hsla(292, 80%, 46%, 1)',
  'hsla(292, 80%, 51%, 1)',
  'hsla(292, 80%, 60%, 1)',
  'hsla(250, 50%, 90%, 1)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.8)'
]

const ks = [
  'accentBackground',
  'accentColor',
  'background0',
  'background025',
  'background05',
  'background075',
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
  'color9',
  'color10',
  'color11',
  'color12',
  'color0',
  'color025',
  'color05',
  'color075',
  'background',
  'backgroundHover',
  'backgroundPress',
  'backgroundFocus',
  'borderColor',
  'borderColorHover',
  'borderColorPress',
  'borderColorFocus',
  'color',
  'colorHover',
  'colorPress',
  'colorFocus',
  'colorTransparent',
  'placeholderColor',
  'outlineColor'
]

const n1 = t([
  [0, 0],
  [1, 0],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 4],
  [6, 5],
  [7, 6],
  [8, 7],
  [9, 8],
  [10, 9],
  [11, 10],
  [12, 11],
  [13, 12],
  [14, 13],
  [15, 14],
  [16, 15],
  [17, 16],
  [18, 17],
  [19, 18],
  [20, 19],
  [21, 20],
  [22, 5],
  [23, 4],
  [24, 6],
  [25, 6],
  [26, 8],
  [27, 7],
  [28, 9],
  [29, 8],
  [30, 16],
  [31, 15],
  [32, 16],
  [33, 15],
  [34, 17],
  [35, 13],
  [36, 18]
])

export const light = n1
const n2 = t([
  [0, 21],
  [1, 21],
  [2, 22],
  [3, 23],
  [4, 24],
  [5, 25],
  [6, 26],
  [7, 27],
  [8, 28],
  [9, 29],
  [10, 30],
  [11, 31],
  [12, 32],
  [13, 33],
  [14, 34],
  [15, 14],
  [16, 35],
  [17, 36],
  [18, 37],
  [19, 38],
  [20, 39],
  [21, 40],
  [22, 26],
  [23, 27],
  [24, 25],
  [25, 25],
  [26, 29],
  [27, 30],
  [28, 28],
  [29, 29],
  [30, 36],
  [31, 35],
  [32, 36],
  [33, 35],
  [34, 37],
  [35, 34],
  [36, 38]
])

export const dark = n2
const n3 = t([
  [0, 8],
  [1, 8],
  [2, 41],
  [3, 42],
  [4, 43],
  [5, 44],
  [6, 0],
  [7, 0],
  [8, 0],
  [9, 0],
  [10, 0],
  [11, 0],
  [12, 0],
  [13, 0],
  [14, 0],
  [15, 0],
  [16, 45],
  [17, 45],
  [18, 46],
  [19, 47],
  [20, 48],
  [21, 49],
  [22, 0],
  [23, 44],
  [24, 0],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 0],
  [29, 0],
  [30, 45],
  [31, 45],
  [32, 45],
  [33, 45],
  [34, 46],
  [35, 0],
  [36, 47]
])

export const light_accent = n3
const n4 = t([
  [0, 34],
  [1, 34],
  [2, 50],
  [3, 51],
  [4, 52],
  [5, 53],
  [6, 54],
  [7, 55],
  [8, 56],
  [9, 57],
  [10, 58],
  [11, 59],
  [12, 60],
  [13, 61],
  [14, 21],
  [15, 62],
  [16, 63],
  [17, 45],
  [18, 46],
  [19, 47],
  [20, 48],
  [21, 49],
  [22, 54],
  [23, 55],
  [24, 53],
  [25, 53],
  [26, 57],
  [27, 58],
  [28, 56],
  [29, 57],
  [30, 45],
  [31, 63],
  [32, 45],
  [33, 63],
  [34, 46],
  [35, 21],
  [36, 47]
])

export const dark_accent = n4
const n5 = t([
  [30, 15],
  [31, 14],
  [32, 15],
  [33, 14]
])

export const light_alt1 = n5
const n6 = t([
  [30, 14],
  [31, 13],
  [32, 14],
  [33, 13]
])

export const light_alt2 = n6
const n7 = t([
  [22, 8],
  [23, 7],
  [24, 9],
  [25, 9],
  [26, 11],
  [27, 10],
  [29, 11],
  [28, 12]
])

export const light_active = n7
export const light_surface3 = n7
export const light_Button = n7
export const light_SliderTrackActive = n7
const n8 = t([
  [22, 6],
  [23, 5],
  [24, 7],
  [25, 7],
  [26, 9],
  [27, 8],
  [29, 9],
  [28, 10]
])

export const light_surface1 = n8
export const light_ListItem = n8
export const light_SelectTrigger = n8
export const light_Card = n8
export const light_Progress = n8
export const light_TooltipArrow = n8
export const light_SliderTrack = n8
export const light_Input = n8
export const light_TextArea = n8
const n9 = t([
  [22, 7],
  [23, 6],
  [24, 8],
  [25, 8],
  [26, 10],
  [27, 9],
  [29, 10],
  [28, 11]
])

export const light_surface2 = n9
export const light_Checkbox = n9
export const light_Switch = n9
export const light_TooltipContent = n9
export const light_RadioGroupItem = n9
const n10 = t([
  [22, 10],
  [23, 10],
  [24, 11],
  [25, 11],
  [26, 10],
  [27, 10],
  [29, 11],
  [28, 11]
])

export const light_surface4 = n10
const n11 = t([
  [30, 35],
  [31, 14],
  [32, 35],
  [33, 14]
])

export const dark_alt1 = n11
const n12 = t([
  [30, 14],
  [31, 34],
  [32, 14],
  [33, 34]
])

export const dark_alt2 = n12
const n13 = t([
  [22, 29],
  [23, 30],
  [24, 28],
  [25, 28],
  [26, 32],
  [27, 33],
  [29, 32],
  [28, 31]
])

export const dark_active = n13
export const dark_surface3 = n13
export const dark_Button = n13
export const dark_SliderTrackActive = n13
const n14 = t([
  [22, 27],
  [23, 28],
  [24, 26],
  [25, 26],
  [26, 30],
  [27, 31],
  [29, 30],
  [28, 29]
])

export const dark_surface1 = n14
export const dark_ListItem = n14
export const dark_SelectTrigger = n14
export const dark_Card = n14
export const dark_Progress = n14
export const dark_TooltipArrow = n14
export const dark_SliderTrack = n14
export const dark_Input = n14
export const dark_TextArea = n14
const n15 = t([
  [22, 28],
  [23, 29],
  [24, 27],
  [25, 27],
  [26, 31],
  [27, 32],
  [29, 31],
  [28, 30]
])

export const dark_surface2 = n15
export const dark_Checkbox = n15
export const dark_Switch = n15
export const dark_TooltipContent = n15
export const dark_RadioGroupItem = n15
const n16 = t([
  [22, 31],
  [23, 31],
  [24, 30],
  [25, 30],
  [26, 31],
  [27, 31],
  [29, 30],
  [28, 30]
])

export const dark_surface4 = n16
const n17 = t([
  [30, 45],
  [31, 0],
  [32, 45],
  [33, 0]
])

export const light_accent_alt1 = n17
const n18 = t([
  [30, 0],
  [31, 0],
  [32, 0],
  [33, 0]
])

export const light_accent_alt2 = n18
const n19 = t([
  [22, 0],
  [23, 0],
  [24, 0],
  [25, 0],
  [26, 0],
  [27, 0],
  [29, 0],
  [28, 0]
])

export const light_accent_active = n19
export const light_accent_surface1 = n19
export const light_accent_surface2 = n19
export const light_accent_surface3 = n19
export const light_accent_surface4 = n19
export const light_accent_ListItem = n19
export const light_accent_SelectTrigger = n19
export const light_accent_Card = n19
export const light_accent_Button = n19
export const light_accent_Checkbox = n19
export const light_accent_Switch = n19
export const light_accent_TooltipContent = n19
export const light_accent_Progress = n19
export const light_accent_RadioGroupItem = n19
export const light_accent_TooltipArrow = n19
export const light_accent_SliderTrackActive = n19
export const light_accent_SliderTrack = n19
export const light_accent_Input = n19
export const light_accent_TextArea = n19
const n20 = t([
  [30, 63],
  [31, 62],
  [32, 63],
  [33, 62]
])

export const dark_accent_alt1 = n20
const n21 = t([
  [30, 62],
  [31, 21],
  [32, 62],
  [33, 21]
])

export const dark_accent_alt2 = n21
const n22 = t([
  [22, 57],
  [23, 58],
  [24, 56],
  [25, 56],
  [26, 60],
  [27, 61],
  [29, 60],
  [28, 59]
])

export const dark_accent_active = n22
export const dark_accent_surface3 = n22
export const dark_accent_Button = n22
export const dark_accent_SliderTrackActive = n22
const n23 = t([
  [22, 55],
  [23, 56],
  [24, 54],
  [25, 54],
  [26, 58],
  [27, 59],
  [29, 58],
  [28, 57]
])

export const dark_accent_surface1 = n23
export const dark_accent_ListItem = n23
export const dark_accent_SelectTrigger = n23
export const dark_accent_Card = n23
export const dark_accent_Progress = n23
export const dark_accent_TooltipArrow = n23
export const dark_accent_SliderTrack = n23
export const dark_accent_Input = n23
export const dark_accent_TextArea = n23
const n24 = t([
  [22, 56],
  [23, 57],
  [24, 55],
  [25, 55],
  [26, 59],
  [27, 60],
  [29, 59],
  [28, 58]
])

export const dark_accent_surface2 = n24
export const dark_accent_Checkbox = n24
export const dark_accent_Switch = n24
export const dark_accent_TooltipContent = n24
export const dark_accent_RadioGroupItem = n24
const n25 = t([
  [22, 59],
  [23, 59],
  [24, 58],
  [25, 58],
  [26, 59],
  [27, 59],
  [29, 58],
  [28, 58]
])

export const dark_accent_surface4 = n25
const n26 = t([
  [30, 6],
  [31, 5],
  [32, 7],
  [33, 7],
  [22, 16],
  [23, 15],
  [24, 16],
  [25, 15],
  [26, 14],
  [27, 13],
  [29, 12],
  [28, 11]
])

export const light_SwitchThumb = n26
export const light_SliderThumb = n26
export const light_Tooltip = n26
export const light_ProgressIndicator = n26
const n27 = t([[22, 64]])

export const light_SheetOverlay = n27
export const light_DialogOverlay = n27
export const light_ModalOverlay = n27
export const light_accent_SheetOverlay = n27
export const light_accent_DialogOverlay = n27
export const light_accent_ModalOverlay = n27
const n28 = t([
  [30, 27],
  [31, 28],
  [32, 26],
  [33, 26],
  [22, 36],
  [23, 35],
  [24, 36],
  [25, 35],
  [26, 14],
  [27, 34],
  [29, 33],
  [28, 32]
])

export const dark_SwitchThumb = n28
export const dark_SliderThumb = n28
export const dark_Tooltip = n28
export const dark_ProgressIndicator = n28
const n29 = t([[22, 65]])

export const dark_SheetOverlay = n29
export const dark_DialogOverlay = n29
export const dark_ModalOverlay = n29
export const dark_accent_SheetOverlay = n29
export const dark_accent_DialogOverlay = n29
export const dark_accent_ModalOverlay = n29
const n30 = t([
  [30, 0],
  [31, 0],
  [32, 0],
  [33, 0],
  [22, 45],
  [23, 45],
  [24, 45],
  [25, 45],
  [26, 0],
  [27, 0],
  [29, 0],
  [28, 0]
])

export const light_accent_SwitchThumb = n30
export const light_accent_SliderThumb = n30
export const light_accent_Tooltip = n30
export const light_accent_ProgressIndicator = n30
const n31 = t([
  [30, 55],
  [31, 56],
  [32, 54],
  [33, 54],
  [22, 45],
  [23, 63],
  [24, 45],
  [25, 63],
  [26, 62],
  [27, 21],
  [29, 61],
  [28, 60]
])

export const dark_accent_SwitchThumb = n31
export const dark_accent_SliderThumb = n31
export const dark_accent_Tooltip = n31
export const dark_accent_ProgressIndicator = n31
