import {test,expect} from '@playwright/test'

test('verify 1',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log('test 1')
})

test('verify 2',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log('test 2')
})

test('verify 3',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log('test 3')
})