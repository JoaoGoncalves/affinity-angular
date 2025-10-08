import { DestroyRef, inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, Subject, takeUntil } from "rxjs";


export function createSearch<T>(control: FormControl, destroyRef = inject(DestroyRef)){

    const destroy$ = new Subject<void>();

    destroyRef.onDestroy( () => destroy$.next() );

    return control.valueChanges.pipe(
        debounceTime(500),
        takeUntil(destroy$),
    )


    
}