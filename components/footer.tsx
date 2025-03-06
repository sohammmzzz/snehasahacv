export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Sneha Saha. All rights reserved.
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Data Scientist | Decision Scientist | Analytics Expert</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

