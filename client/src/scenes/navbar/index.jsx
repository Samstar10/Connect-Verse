import { useState } from "react"
import {
    Box, 
    IconButton,
    inputBase,
    Typography,
    Select,
    MenuItem,
    formControl,
    useTheme,
    useMediaQuery
} from "@mui/material"
import {
    Search, 
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close
} from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { setMode, setLogout } from "state"
import { Navigate, useNavigate } from "react-router-dom"
import FlexBetween from "components/FlexBetween"

const Navbar = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const isNoneMobileScreens = useMediaQuery("(min-width: 1000px)")

    const theme = useTheme()
    const neutralLight = theme.palette.neutral.light
    const dark = theme.palette.neutral.dark
    const background = theme.palette.background.default
    const primaryLight = theme.palette.primary.light
    const alt = theme.palette.background.alt

    const fullName = `${user.firstName} ${user.lastName}`

    return <FlexBetween padding="1rem 6%" backgroundColor={alt}>
        <FlexBetween gap="1.75rem">
            <Typography
                fontWeight="bold"
                fontSize="clamp(1rem, 2rem, 2.25rem)"
                color="primary"
                onClick={() => Navigate("/home")}
                sx={{
                    "&:hover": {
                        color: primaryLight,
                        cursor: "pointer"
                    },
                }}
            >
                ConnectVerse
            </Typography>
            {isNoneMobileScreens && (
                <FlexBetween backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">

                </FlexBetween>
            )}
        </FlexBetween>
    </FlexBetween>
}

export default Navbar