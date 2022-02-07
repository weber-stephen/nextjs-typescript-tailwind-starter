import { NextPage } from 'next'
import LandingLayout from '../layouts/landingLayout'
import SecondaryLayout from '../layouts/secondarylayout'

type PageWithLandingLayoutType = NextPage & { layout: typeof LandingLayout }

type PageWithPostLayoutType = NextPage & { layout: typeof SecondaryLayout }

type PageWithLayoutType = PageWithLandingLayoutType | PageWithPostLayoutType

export default PageWithLayoutType
