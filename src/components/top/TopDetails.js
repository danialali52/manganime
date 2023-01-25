import React from 'react'
import TopView from './TopView'
import { useTop } from '../../hooks/queriesHooks'
import { useTheme } from '@mui/material'
import {
  Button,
  Container,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  MobileStepper,
  Typography,
} from '../ui'

const rankReducer = (state, action) => {
  switch (action?.type) {
    case 'Next':
      return { minRank: state?.minRank + 1, maxRank: state?.maxRank + 1 }
    case 'Prev':
      return { minRank: state?.minRank - 1, maxRank: state?.maxRank - 1 }
    default:
      return { minRank: 0, maxRank: 4 }
  }
}

const TopDetails = ({ type, isHomePage = false }) => {
  const topDatas = useTop(type)
  const [filteredTopDatas, setFilteredTopDatas] = React.useState([])
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = topDatas?.length
  const [rank, dispatch] = React.useReducer(rankReducer, {
    minRank: 0,
    maxRank: 4,
  })
  const theme = useTheme()
  const sxTopContainerHomePage = {
    maxWidth: '1600px',
    position: 'relative',
    m: '2em 0',
    p: '1em 0',
    bgcolor: theme.palette.background.content,
    boxShadow:
      '0px 2px 4px 2px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  }

  React.useEffect(() => {
    if (topDatas) {
      setFilteredTopDatas(
        topDatas?.Page?.media?.slice(rank?.minRank, rank?.maxRank),
      )
    }
  }, [rank?.maxRank, rank?.minRank, topDatas])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    dispatch({ type: 'Next' })
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
    dispatch({ type: 'Prev' })
  }

  return (
    <>
      <Container
        component="article"
        disableGutters
        sx={isHomePage ? sxTopContainerHomePage : null}
        maxWidth={!isHomePage ? false : 'lg'}
      >
        {isHomePage ? (
          <MobileStepper
            sx={{
              position: 'absolute',
              top: '15em',
              width: '100%',
              bgcolor: 'inherit',
              '.MuiMobileStepper-dots': {
                display: 'none',
              },
            }}
            variant="dots"
            steps={maxSteps ?? 0}
            position="static"
            nextButton={
              <Button
                sx={{
                  zIndex: 1,
                  color: 'rgb(68,68,68)',
                  ':hover': { bgcolor: 'rgba(68,68,68,0.5)' },
                }}
                size="small"
                onClick={filteredTopDatas?.length === 4 ? handleNext : null}
                disabled={activeStep === maxSteps - 1}
              >
                <KeyboardArrowRight sx={{ fontSize: '4em' }} />
              </Button>
            }
            backButton={
              <Button
                sx={{
                  zIndex: 1,
                  color: 'rgb(68,68,68)',
                  ':hover': { bgcolor: 'rgba(68,68,68,0.5)' },
                }}
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft sx={{ fontSize: '4em' }} />
              </Button>
            }
          />
        ) : null}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginLeft: '1em',
            textShadow: `${theme.palette.background.topIcon} 1px 0 0`,
          }}
        >
          Top {type}
        </Typography>
        {topDatas ? (
          <TopView
            isHomePage={isHomePage ? true : false}
            datas={isHomePage ? filteredTopDatas : topDatas?.Page?.media}
            type={type}
            rank={rank.minRank + 1}
          />
        ) : null}
      </Container>
    </>
  )
}

export default TopDetails
