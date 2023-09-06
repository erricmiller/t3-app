import { cn } from "@/lib/utils";
import {
  LucideProps,
  Moon,
  SunMedium,
  User,
  Play,
  Facebook,
  Instagram,
  Loader2,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  Snowflake,
  Menu,
  ArrowUp,
  ArrowDown,
  EyeOff,
  PlusCircle,
  X,
  Trash,
  SlidersHorizontal,
  HelpCircle,
  Circle,
  Timer,
  CheckCircle2,
  XCircle,
  Copy,
  Eye,
  Edit,
  Trash2,
  ArrowDownUp,
  Pencil,
} from "lucide-react";

export const Icons = {
  Pencil:Pencil,
  ArrowDownUp:ArrowDownUp,
  speedPrevious: ChevronsLeft,
  speedNext: ChevronsRight,
  user: User,
  sun: SunMedium,
  moon: Moon,
  play: Play,
  facebook: Facebook,
  insta: Instagram,
  loader: Loader2,
  check: Check,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  chevronsLeft: ChevronsLeft,
  chevronsRight: ChevronsRight,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  chevronUpDown: ChevronsUpDown,
  logo: Snowflake,
  menu: Menu,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  hide: EyeOff,
  addCircle: PlusCircle,
  close: X,
  trash: Trash,
  horizontalSliders: SlidersHorizontal,
  sort: ChevronsUpDown,
  plus: PlusCircle,
  question: HelpCircle,
  circle: Circle,
  pending: Timer,
  checked: CheckCircle2,
  cancel: XCircle,
  previous: ChevronLeft,
  next: ChevronRight,
  options: SlidersHorizontal,
  copy: Copy,
  view: Eye,
  edit: Edit,
  delete: Trash2,

  signin: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-log-in", props.className)}
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  ),
  signout: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-log-out", props.className)}
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  ),
  spinner: (props: LucideProps) => (
    <svg
      // className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={cn("spinner", props.className)}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  ),
};
