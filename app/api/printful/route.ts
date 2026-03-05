import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const apiKey = process.env.PRINTFUL_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: 'No API key provided' }, { status: 500 });
        }

        // Fetch products from Printful
        const productsRes = await fetch('https://api.printful.com/store/products', {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!productsRes.ok) {
            throw new Error(`Printful API error: ${productsRes.statusText}`);
        }

        const productsData = await productsRes.json();

        // Since we want high quality images, let's fetch the detailed product for the first product
        if (productsData.result && productsData.result.length > 0) {
            const topProduct = productsData.result[0];
            const detailedRes = await fetch(`https://api.printful.com/store/products/${topProduct.id}`, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                },
                next: { revalidate: 3600 }
            });
            const detailedData = await detailedRes.json();

            // Return combined data with higher quality images
            return NextResponse.json({
                ...topProduct,
                details: detailedData.result
            });
        }

        return NextResponse.json({
            error: 'No products found'
        }, { status: 404 });

    } catch (error: any) {
        console.error('Error fetching Printful merchandise:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
