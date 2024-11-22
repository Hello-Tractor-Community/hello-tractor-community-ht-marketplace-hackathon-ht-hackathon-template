import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'
import { Heart } from 'lucide-react'

export function UserWishlist() {
	return (
		<Sheet>
			<SheetTrigger>
				<div className='flex flex-col items-center'>
					<Heart />
					<p className='text-sm'>Wishlist</p>
				</div>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader className='font-manrope'>
					<SheetTitle>Your Wishlist</SheetTitle>
					<SheetDescription>
						Find all your favorite tractors here
					</SheetDescription>
				</SheetHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='name' className='text-right'>
							Name
						</Label>
						<Input
							id='name'
							value='Pedro Duarte'
							className='col-span-3'
						/>
					</div>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='username' className='text-right'>
							Username
						</Label>
						<Input
							id='username'
							value='@peduarte'
							className='col-span-3'
						/>
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button variant="outline" type='submit'>Save changes</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
