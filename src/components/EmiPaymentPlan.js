import React, { useState } from 'react'
import classes from './EmiPaymentPlan.module.css'

const emiTenuresList = [3, 6, 9]
const EmiPaymentPlan = ({ programDetails }) => {

    const [emiTenure, setEmiTenure] = useState(9) //max


    const getSliderStyles = () => {
        const percent = ((emiTenure - 3) / 6) * 100
        return {
            backgroundImage: `linear-gradient(to right, #0096FF ${percent}%, #C4C4C4 ${percent}% )`
        }
    }

    return (
        <section className={classes.mainContainer}>
            <h1 className={classes.heading}>EMI Payment Plan</h1>
            {
                programDetails.scorePercent > 45 ? (
                    <>
                        <div className={classes.subSection}>
                            <p className={classes.subSectionHeading}>Total amount to be paid *</p>
                            <p className={classes.amount}>₹{programDetails.fee}</p>
                        </div>
                        <div className={classes.emiTenureContainer}>
                            <p className={classes.subSectionHeading}>EMI Tenure</p>
                            <div className={classes.tenureSliderContainer}>
                                <input
                                    style={getSliderStyles()}
                                    type='range'
                                    min={emiTenuresList[0]}
                                    max={emiTenuresList[emiTenuresList.length - 1]}
                                    value={emiTenure}
                                    onChange={(e) => setEmiTenure(+e.target.value)}
                                    step={3}
                                />
                                <ul className={classes.sliderList}>
                                    {emiTenuresList.map((label) => (
                                        <li key={label} onClick={() => setEmiTenure(label)}>
                                            {label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={classes.subSection2}>
                            <div>
                                <p className={classes.subSectionHeading}>EMI Amount</p>
                                <div className={classes.emiAmountWrapper}>
                                    <p className={classes.emiAmountPerMonth}>₹ {Math.floor((programDetails.fee - 2500) / emiTenure)}</p>
                                    <p className={classes.perMonthLabel}>per month</p>
                                </div>
                            </div>
                            <div>
                                <p className={classes.subSectionHeading}>EMI Interest</p>
                                <p className={classes.emiAmountPerMonth}>0 %</p>
                            </div>
                        </div>
                        <p className={classes.noteText}>
                            <span>*</span> A registration down payment of <span>INR 2,500</span> will be required. This amount will be adjusted in the total amount to be paid.
                        </p>
                    </>
                ) : (
                    <div className={classes.notAvailableContainer}>
                        <div className={classes.notAvailableContent}>
                            <h1>Not Available</h1>
                            <p>Available only if you have scored <span>45% and above</span> in the EdYoda Admission Test</p>
                        </div>
                    </div>
                )
            }

        </section>
    )
}

export default EmiPaymentPlan