import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import adminAffiliateListSlice  from "../features/adminAffiliateListSlice";
import adminHelpSlice from "../features/adminHelpSlice";
import adminJobSlice from "../features/adminJobSlice";
import adminWithdrawSlice from "../features/adminWithdrawSlice";
import adminLatestSlice from "../features/adminLatestSlice";
import adminSlice from "../features/adminSlice";


export const store = configureStore({
    reducer: {
        user: userSlice,
        affiliateUsers: adminAffiliateListSlice,
        help: adminHelpSlice,
        job: adminJobSlice,
        withdraw: adminWithdrawSlice,
        latest: adminLatestSlice,
        admin: adminSlice
    }
})