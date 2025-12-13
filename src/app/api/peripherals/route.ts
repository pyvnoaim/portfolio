import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { Peripheral } from '@/types'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'peripherals.json')
  const data = fs.readFileSync(filePath, 'utf8')
  const peripherals: Peripheral[] = JSON.parse(data)

  const activePeripherals = peripherals.filter((item: Peripheral) => item.using)

  return NextResponse.json(activePeripherals)
}
